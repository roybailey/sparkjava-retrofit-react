package me.roybailey.http;

import com.google.gson.reflect.TypeToken;
import me.roybailey.service.DemoTaskService;
import me.roybailey.model.Task;
import me.roybailey.model.TaskMeta;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.lang.reflect.Type;
import java.util.List;

import static spark.Spark.get;

/**
 * Demonstration Restful controller for api
 */
public class RestfulController {

    private static Logger LOG = LoggerFactory.getLogger(RestfulController.class);

    static final String JSON = "application/json";

    /* capture generic response types for json serialization */
    static final Type TaskMetaType = new TypeToken<RestResponse<TaskMeta>>() {
    }.getType();

    static final Type TaskListType = new TypeToken<RestResponse<List<Task>>>() {
    }.getType();

    //
    //
    //

    private final DemoTaskService taskService;
    private final JsonTransformer jsonTransformer = new JsonTransformer();

    public DemoTaskService getTaskService() {
        return taskService;
    }

    public RestfulController(DemoTaskService taskService) throws IOException {

        this.taskService = taskService;

        get("/api/v1", JSON, (request, response) ->
                RestResponse.<Void>builder()
                        .withLink("tasks-meta", request.url() + "/tasks-meta", "gets tasks total count")
                        .withLink("tasks", request.url() + "/tasks", "gets all tasks")
                        .build()
                , jsonTransformer);

        get("/api/v1/tasks", JSON, (request, response) -> {
            Integer skip = request.queryMap("skip").integerValue();
            Integer limit = request.queryMap("limit").integerValue();
            if (skip == null) {
                skip = 0;
            }
            if (limit == null) {
                limit = 10;
            }
            return RestResponse.<List<Task>>builder()
                    .withContent(taskService.getTaskList(skip, limit))
                    .build();
        }, jsonTransformer);

        get("/api/v1/tasks-meta", JSON, (request, response) ->
                RestResponse.builder(new TaskMeta(taskService.getTaskTotal())).build()
                , jsonTransformer);
    }
}
