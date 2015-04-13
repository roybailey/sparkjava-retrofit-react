package me.roybailey.http;

import com.google.common.base.Stopwatch;
import com.google.common.collect.ImmutableList;
import com.google.common.collect.ImmutableMap;
import com.samskivert.mustache.Mustache;
import com.samskivert.mustache.Template;
import jdk.nashorn.api.scripting.NashornScriptEngine;
import me.roybailey.service.DemoTaskService;
import me.roybailey.model.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import retrofit.RestAdapter;
import retrofit.converter.GsonConverter;

import javax.script.Bindings;
import javax.script.ScriptContext;
import javax.script.ScriptEngineManager;
import javax.script.SimpleBindings;
import java.io.FileReader;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import static spark.Spark.*;

/**
 * Demonstration of React controller using Nashorn
 */
public class ReactController {

    private static Logger LOG = LoggerFactory.getLogger(ReactController.class);

    public static final String BASE = "http://localhost:" + DemoService.PORT;

    private final NashornScriptEngine nashorn;

    public ReactController(DemoTaskService taskService) throws Exception {

        LOG.info("Loading nashorn...");
        Stopwatch timer = Stopwatch.createStarted();
        nashorn = (NashornScriptEngine) new ScriptEngineManager().getEngineByName("nashorn");
        // React depends on the "global" variable
        nashorn.eval("var global = this");
        // Dependency Injection Setup
        // making java services available to javascript global scope
        // note the names here are the global names used in JavaScript to call back into these Java objects
        Bindings bindings = new SimpleBindings();
        bindings.put("JavaReactController", this);
        bindings.put("JavaTaskService", taskService);
        nashorn.setBindings(bindings, ScriptContext.GLOBAL_SCOPE);
        // eval react.js
        String polyfill = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/nashorn-polyfill.js").toURI()).toString();
        String react = Paths.get(ClassLoader.getSystemResource("webapp/react/react.js").toURI()).toString();
        String application = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/app.js").toURI()).toString();
        String dashboard = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/dashboard.js").toURI()).toString();
        nashorn.eval(new FileReader(polyfill));
        nashorn.eval(new FileReader(react));
        nashorn.eval(new FileReader(application));
        nashorn.eval(new FileReader(dashboard));
        timer.stop();
        LOG.info("Nashorn loaded..." + timer);

        after((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/react", "text/html", (request, response) ->
                render("renderTitle", ImmutableMap.<String, Object>builder()
                        .put("title", "This came from Java React")
                        .build()));

        get("/react/dashboard", "text/html", (request, response) ->
                renderWithTemplate("renderDashboard", "assets/dashboard.html",
                        ImmutableMap.<String, Object>builder()
                                .putAll(request.queryMap().toMap())
                                .put("title", "Java8 React Dashboard")
                                .put("message", "Java8 React Dashboard Loaded Successfully")
                                .build()));
    }

    /**
     * Render a page using a Mustache template
     *
     * @param renderer the react renderer to call
     * @param template the mustache template html (with 'title' and 'content' tokens)
     * @param props    properties to pass into react
     * @return the html to return from page call
     */
    private Object renderWithTemplate(String renderer, String template, Map<String, Object> props) {
        String htmlContent = render(renderer, props);
        String htmlResult;
        LOG.info("Loading template {} with renderer {}", template, renderer);
        Stopwatch timer = Stopwatch.createStarted();
        try {
            Path pathTemplate = Paths.get(ClassLoader.getSystemResource("webapp/" + template).toURI());
            String html = new String(Files.readAllBytes(pathTemplate));
            // compile the template using mustache engine...
            Template tmpl = Mustache.compiler().compile(html);
            // create template tokens...
            Map<String, String> data = ImmutableMap.<String, String>builder()
                    .put("title", String.valueOf(props.get("title")))
                    .put("content", htmlContent)
                    .build();
            // map template tokens...
            htmlResult = tmpl.execute(data);
        } catch (Exception err) {
            err.printStackTrace();
            throw new IllegalStateException("failed to render react component", err);
        } finally {
            timer.stop();
            LOG.info("Template {} with renderer {} loaded {}", template, renderer, timer);
        }
        return htmlResult.toString();
    }

    /**
     * Render something using Nashorn and React
     *
     * @param renderer the react renderer to call
     * @param props    properties to pass into react
     * @return the html to return from page call
     */
    public String render(String renderer, Map<String, Object> props) {
        try {
            Object html = nashorn.invokeFunction(renderer, props);
            return String.valueOf(html);
        } catch (Exception err) {
            err.printStackTrace();
            throw new IllegalStateException("failed to render react component", err);
        }
    }

    /**
     * Gets the statistics for rendering the percent charts on the dashboard.
     *
     * @return simple map of name+value
     */
    public List<Map<String, Object>> loadStatisticsAsArray() {

        //Getting the runtime reference from system to generate some statistics
        Runtime runtime = Runtime.getRuntime();
        double totalMemory = runtime.totalMemory();
        double freeMemory = runtime.freeMemory();
        double usedMemory = (runtime.totalMemory() - runtime.freeMemory());

        return ImmutableList.<Map<String, Object>>builder()
                .add(ImmutableMap.<String, Object>builder().put("name", "Used/Total Memory").put("value", Math.floor(usedMemory / totalMemory * 100)).build())
                .add(ImmutableMap.<String, Object>builder().put("name", "Free/Total Memory").put("value", Math.floor(freeMemory / totalMemory * 100)).build())
                .add(ImmutableMap.<String, Object>builder().put("name", "Random Statistic").put("value", Math.floor(50+50*Math.random())).build())
                .add(ImmutableMap.<String, Object>builder().put("name", "Random Statistic").put("value", Math.floor(50+50*Math.random())).build())
                .build();
    }

    /**
     * Gets the Task List via Java but by making a further RESTful API call out.
     */
    public List<Task> getTaskList(int skip, int limit) {

        RestAdapter restAdapter = new RestAdapter.Builder()
                .setEndpoint(BASE)
                .setRequestInterceptor((request) -> request.addHeader("User-Agent", "ReactController"))
                .setConverter(new GsonConverter(JsonUtil.DefaultGsonBuilder.create()))
                .setLogLevel(RestAdapter.LogLevel.FULL)
                .build();

        RestfulService taskService = restAdapter.create(RestfulService.class);
        RestResponse<List<Task>> response = taskService.getTasks(skip, limit);

        return (response.content != null) ? response.content : Collections.emptyList();
    }
}
