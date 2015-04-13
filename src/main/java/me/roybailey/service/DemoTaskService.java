package me.roybailey.service;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import me.roybailey.http.JsonUtil;
import me.roybailey.model.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.BufferedReader;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

/**
 * Demonstration service implementation
 */
public class DemoTaskService implements TaskService {

    private static Logger LOG = LoggerFactory.getLogger(DemoTaskService.class);

    static final Type MockTaskType = new TypeToken<Map<String, Task>>() {
    }.getType();

    // create our demo cache of tasks
    // to be replaced with your favorite database service
    Map<String, Task> mapTasks = new HashMap<>();

    public DemoTaskService() {
        Gson gson = JsonUtil.DefaultGsonBuilder.create();

        // load the demo data from json in classpath package
        String filename = DemoTaskService.class.getSimpleName() + ".json";
        String filepath = "demodata/" + filename;
        try {
            Path resource;
            try {
                resource = Paths.get(ClassLoader.getSystemResource(filepath).toURI());
            } catch (Exception err) {
                throw new IllegalArgumentException("Not Found: " + filepath);
            }
            LOG.info("Loading resource path........" + resource);
            BufferedReader reader = Files.newBufferedReader(resource, StandardCharsets.UTF_8);
            mapTasks = gson.fromJson(reader, MockTaskType);
        } catch (Exception err) {
            throw new IllegalArgumentException("Loading [" + filename + "] failed", err);
        }
        LOG.debug(String.valueOf(mapTasks));
    }

    @Override
    public Task getTaskById(String guid) {
        return mapTasks.get(guid);
    }

    @Override
    public List<Task> getTaskList(int skip, int limit) {
        AtomicInteger counter = new AtomicInteger(limit);
        List<Task> result = mapTasks.values().stream()
                .skip(skip)
                .filter(it -> (counter.getAndAdd(-1)) > 0)
                .collect(Collectors.toList());
        return result;
    }

    @Override
    public Integer getTaskTotal() {
        return this.mapTasks.size();
    }
}
