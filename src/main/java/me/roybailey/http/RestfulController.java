package me.roybailey.http;

import com.google.common.collect.ImmutableMap;
import org.eclipse.jetty.http.HttpStatus;
import spark.Request;

import java.io.IOException;
import java.util.*;

import static spark.Spark.*;

/**
 * Demonstration Restful controller for api
 */
public class RestfulController {

    // create our little cache of todos
    // to be replaced with your favorite database service
    List<Map<String, Object>> listTodos = new ArrayList<>(Arrays.asList(
            new ImmutableMap.Builder<String, Object>()
                    .put("todo", "Shopping")
                    .put("completed", false)
                    .build(),
            new ImmutableMap.Builder<String, Object>()
                    .put("todo", "Washing")
                    .put("completed", true)
                    .build())
    );

    public RestfulController() throws IOException {

        get("/api/v1", "application/json", (request, response) ->
                getRootLinks(request), new JsonTransformer());

        get("/api/v1/todos", "application/json", (request, response) ->
                listTodos, new JsonTransformer());

        get("/api/v1/todos-meta", "application/json", (request, response) ->
                getTodoMeta(), new JsonTransformer());

    }

    private ImmutableMap<String, Object> getTodoMeta() {
        return new ImmutableMap.Builder<String, Object>()
                .put("total", listTodos.size())
                .build();
    }

    private Map<String, Object> getRootLinks(Request request) {
        return new ImmutableMap.Builder<String, Object>()
                .put("_links", new ImmutableMap.Builder<String, Object>()
                        .put("todos-meta", new ImmutableMap.Builder<String, Object>()
                                .put("href", request.url() + "/todos-meta")
                                .build())
                        .put("todos", new ImmutableMap.Builder<String, Object>()
                                .put("href", request.url() + "/todos")
                                .build())
                        .build())
                .build();
    }
}
