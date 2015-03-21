package me.roybailey.http;

import org.eclipse.jetty.http.HttpStatus;

import javax.sound.sampled.Port;

import static spark.Spark.*;
import static spark.Spark.after;
import static spark.SparkBase.port;
import static spark.SparkBase.staticFileLocation;


public class DemoService {

    public static final int PORT = 4545;

    public static void main(String[] args) {

        port(PORT);
        staticFileLocation("/webapp");

        before("/protected/*", (request, response) -> {
            // ... check if authenticated
            halt(HttpStatus.UNAUTHORIZED_401, "Go Away!");
        });

        after((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        after((request, response) -> response.header("cache-control", "no-cache"));

        get("/", (request, response) -> {
            response.redirect("/index.html");
            return HttpStatus.OK_200;
        });
        get("/status", "application/json", (request, response) -> "{ version: 1.0 }");

        try {
            new RestfulController();
            new ReactController();
        } catch (Exception err) {
            throw new RuntimeException("Failed to start server", err);
        }
    }
}
