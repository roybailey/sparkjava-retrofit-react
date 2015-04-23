package me.roybailey.service;

import com.google.common.collect.ImmutableMap;
import com.google.common.io.Resources;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import me.roybailey.http.JsonUtil;
import me.roybailey.model.Task;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.InputStreamReader;
import java.io.Reader;
import java.lang.reflect.Type;
import java.net.URL;
import java.nio.charset.StandardCharsets;
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

    static Map<String, Task> demodata = ImmutableMap.<String, Task>builder()
            .put("1", Task.builder()
                    .withGuid("1")
                    .withName("Shopping")
                    .withDescription("Shopping needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0)
                    .build())
            .put("2", Task.builder()
                    .withGuid("2")
                    .withName("Washing")
                    .withDescription("Washing needs to be done")
                    .withDueDate("2015-04-16T17:19:25.257Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("3", Task.builder()
                    .withGuid("3")
                    .withName("Car Service")
                    .withDescription("Car Service needs to be done")
                    .withDueDate("2015-04-16T17:19:25.257Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("4", Task.builder()
                    .withGuid("4")
                    .withName("Revision Study")
                    .withDescription("Revision Study needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("5", Task.builder()
                    .withGuid("5")
                    .withName("Appointment")
                    .withDescription("Appointment needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("6", Task.builder()
                    .withGuid("6")
                    .withName("Trip to tip")
                    .withDescription("Trip to tip needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("7", Task.builder()
                    .withGuid("7")
                    .withName("Tidy garage")
                    .withDescription("Tidy garage needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("8", Task.builder()
                    .withGuid("8")
                    .withName("Fix broken chair")
                    .withDescription("Fix broken chair needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .put("9", Task.builder()
                    .withGuid("9")
                    .withName("Order present")
                    .withDescription("Order present needs to be done")
                    .withDueDate("2015-04-16T12:00:00.000Z")
                    .withEffort(100)
                    .withProgress(0).build())
            .build();

    // create our demo cache of tasks
    // to be replaced with your favorite database service
    Map<String, Task> mapTasks = new HashMap<>();

    public DemoTaskService() {
        Gson gson = JsonUtil.DefaultGsonBuilder.create();

        // load the demo data from json in classpath package
        String filename = DemoTaskService.class.getSimpleName() + ".json";
        String filepath = "/demodata/" + filename;
        try {
            mapTasks = gson.fromJson(new InputStreamReader(this.getClass().getResourceAsStream(filepath)), MockTaskType);
        } catch (Exception err) {
            LOG.warn("Failed to load " + filepath + " using hard-coded data", err);
            mapTasks.putAll(demodata);
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
