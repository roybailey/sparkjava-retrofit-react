package me.roybailey.http;

import me.roybailey.service.DemoTaskService;
import org.eclipse.jetty.http.HttpStatus;

import static spark.Spark.*;
import static spark.Spark.after;
import static spark.SparkBase.port;
import static spark.SparkBase.staticFileLocation;


public class DemoService {

    public static final int PORT = 4545;

    public static void main(String[] args) {

        // setup sparkjava global settings
        port(PORT);
        staticFileLocation("/webapp");

        before("/protected/*", (request, response) -> {
            // ... check if authenticated
            halt(HttpStatus.UNAUTHORIZED_401, "Go Away!");
        });

        after((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        after((request, response) -> response.header("cache-control", "no-cache"));

        // add some global routes
        get("/", (request, response) -> {
            response.redirect("/admin.html");
            return HttpStatus.OK_200;
        });
        get("/status", "application/json", (request, response) -> "{ \"version\": 1.0 }");

        // simple dependency injection
        try {
            DemoTaskService taskService = new DemoTaskService();
            new RestfulController(taskService);
            new ReactController(taskService);
        } catch (Exception err) {
            throw new RuntimeException("Failed to start server", err);
        }
    }
}
