package me.roybailey.http;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import me.roybailey.model.Task;
import me.roybailey.model.TaskMeta;
import org.eclipse.jetty.http.HttpStatus;
import org.junit.*;
import retrofit.RestAdapter;
import retrofit.client.Response;
import retrofit.converter.GsonConverter;
import spark.Spark;

import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.reflect.Type;
import java.util.List;
import java.util.Map;

import static org.hamcrest.core.Is.is;
import static org.junit.Assert.*;


public class RestfulControllerTest {

    public static final String BASE = "http://localhost:" + DemoService.PORT;

    @BeforeClass
    public static void beforeClass() {
        DemoService.main(null);
    }

    @AfterClass
    public static void afterClass() {
        Spark.stop();
    }

    RestAdapter restAdapter;

    @Before
    public void beforeTest() {
        restAdapter = new RestAdapter.Builder()
                .setEndpoint(BASE)
                .setRequestInterceptor((request) -> request.addHeader("User-Agent", "RestfulControllerTest"))
                .setLogLevel(RestAdapter.LogLevel.FULL)
                .setConverter(new GsonConverter(JsonUtil.DefaultGsonBuilder.create()))
                .build();
    }

    @After
    public void afterTest() {
        restAdapter = null;
    }

    @Test
    public void getStatus() throws IOException {
        RestfulService todoService = restAdapter.create(RestfulService.class);
        Response response = todoService.getStatus();
        assertEquals(HttpStatus.OK_200, response.getStatus());

        Gson gson = JsonUtil.DefaultGsonBuilder.create();
        Type collectionType = new TypeToken<Map<String, Object>>() {
        }.getType();
        Map<String, Object> status = gson.fromJson(new InputStreamReader(response.getBody().in()), collectionType);

        assertEquals(1, status.size());
        Map<String, Object> links = (Map<String, Object>) status.get("_links");
        assertNotNull(links);
        assertEquals(BASE + "/api/v1/tasks-meta", ((Map<String, Object>) links.get("tasks-meta")).get("href"));
    }

    @Test
    public void getTaskCount() throws IOException {
        RestfulService taskService = restAdapter.create(RestfulService.class);
        RestResponse<TaskMeta> response = taskService.getTaskMeta();

        assertThat(response.content.getTotal(), is(9));
    }

    @Test
    public void getTasks() throws IOException {
        RestfulService taskService = restAdapter.create(RestfulService.class);
        RestResponse<List<Task>> response = taskService.getTasks(1,4);
        List<Task> tasks = response.content;

        assertThat(tasks.size(), is(4));
        assertNotNull(tasks.get(0).getDueDate());
        assertNotNull(tasks.get(0).getEffort());
        assertNotNull(tasks.get(0).getProgress());
        assertThat(tasks.get(0).getName(), is("Washing"));
        assertThat(tasks.get(1).getName(), is("Car Service"));
    }
}
