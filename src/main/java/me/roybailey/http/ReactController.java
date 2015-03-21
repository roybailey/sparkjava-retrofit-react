package me.roybailey.http;

import jdk.nashorn.api.scripting.NashornScriptEngine;
import org.eclipse.jetty.http.HttpStatus;

import javax.script.ScriptEngineManager;
import java.io.FileReader;
import java.nio.file.Paths;

import static spark.Spark.*;

/**
 * Demonstration of React controller using Nashorn
 */
public class ReactController {

    private NashornScriptEngine nashorn;

    public ReactController() throws Exception {

        nashorn = (NashornScriptEngine) new ScriptEngineManager().getEngineByName("nashorn");
        ScriptEngineManager sem = new ScriptEngineManager();
        // React depends on the "global" variable
        nashorn.eval("var global = this");
        // eval react.js
        System.out.println();
        String polyfill = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/nashorn-polyfill.js").toURI()).toString();
        String react = Paths.get(ClassLoader.getSystemResource("webapp/react/react.js").toURI()).toString();
        String application = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/app.js").toURI()).toString();
        String todo = Paths.get(ClassLoader.getSystemResource("webapp/nashorn/todo.js").toURI()).toString();
        nashorn.eval(new FileReader(polyfill));
        nashorn.eval(new FileReader(react));
        nashorn.eval(new FileReader(application));
        nashorn.eval(new FileReader(todo));

        after((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        get("/react", "text/html", (request, response) ->
                render("renderTitle", "This came from React"));

        get("/react/todomvc", "text/html", (request, response) ->
                render("renderCommentBox", "This came from React"));
    }

    public String render(String renderer, String text) {
        try {
            Object html = nashorn.invokeFunction(renderer, text);
            return String.valueOf(html);
        } catch (Exception e) {
            throw new IllegalStateException("failed to render react component", e);
        }
    }

}
