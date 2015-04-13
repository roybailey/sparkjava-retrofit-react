package me.roybailey.http;


import me.roybailey.model.Task;
import me.roybailey.model.TaskMeta;
import retrofit.client.Response;
import retrofit.http.GET;
import retrofit.http.Query;

import java.util.List;

/**
 * API interface for our restful service api
 */
public interface RestfulService {

    @GET("/api/v1")
    Response getStatus();

    @GET("/api/v1/tasks-meta")
    RestResponse<TaskMeta> getTaskMeta();

    @GET("/api/v1/tasks")
    RestResponse<List<Task>> getTasks(
            @Query("skip") int skip,
            @Query("limit") int limit
    );
}
