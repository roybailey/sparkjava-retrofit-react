package me.roybailey.http;


import retrofit.client.Response;
import retrofit.http.GET;

import java.util.List;
import java.util.Map;

/**
 * API interface for our restful service api
 */
public interface RestfulService {

    @GET("/api/v1")
    Response getStatus();

    @GET("/api/v1/todos-meta")
    Map<String, Object> getTodoMeta();

    @GET("/api/v1/todos")
    List<Map<String, Object>> getTodos();
}
