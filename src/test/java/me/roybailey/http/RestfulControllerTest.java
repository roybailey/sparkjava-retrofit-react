package me.roybailey.http;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import org.eclipse.jetty.http.HttpStatus;
import org.junit.*;
import retrofit.RestAdapter;
import retrofit.client.Response;
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

        Gson gson = new Gson();
        Type collectionType = new TypeToken<Map<String, Object>>() {
        }.getType();
        Map<String, Object> status = gson.fromJson(new InputStreamReader(response.getBody().in()), collectionType);

        assertEquals(1, status.size());
        Map<String, Object> links = (Map<String, Object>) status.get("_links");
        assertNotNull(links);
        assertEquals(BASE + "/api/v1/todos-meta", ((Map<String, Object>)links.get("todos-meta")).get("href"));
    }

    @Test
    public void getTodoCount() throws IOException {
        RestfulService todoService = restAdapter.create(RestfulService.class);
        Map<String, Object> todoMetaData = todoService.getTodoMeta();

        assertThat(todoMetaData.get("total"), is(2.0));
    }

    @Test
    public void getUsers() throws IOException {
        RestfulService todoService = restAdapter.create(RestfulService.class);
        List<Map<String,Object>> todos = todoService.getTodos();

        assertThat(todos.size(), is(2));
        assertNotNull(todos.get(0).get("completed"));
        assertThat(todos.get(0).get("todo"), is("Shopping"));
        assertThat(todos.get(1).get("todo"),is("Washing"));
    }
}
