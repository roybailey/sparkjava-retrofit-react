package me.roybailey.http;

import com.google.gson.Gson;
import me.roybailey.model.Task;
import me.roybailey.model.TaskMeta;
import org.junit.Test;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;


/**
 * Isolated testing of RestResponse serialization/deserialization via gson
 */
public class RestResponseTest {

    @Test
    public void getTaskMetaSerialization() throws IOException {
        RestResponse<TaskMeta> expected = RestResponse.builder(new TaskMeta(10)).build();

        Gson gson = JsonUtil.DefaultGsonBuilder.create();
        String json = gson.toJson(expected);
        RestResponse<TaskMeta> actual = gson.fromJson(json, RestfulController.TaskMetaType);

        assertThat(actual.content.getClass().getName(), is(expected.content.getClass().getName()));
        assertThat(actual.content.getTotal(), is(expected.content.getTotal()));
    }

    @Test
    public void getTaskListSerialization() throws IOException {
        List<Task> content = new ArrayList<>();
        content.add(new Task("1", "TEST", "testing...123", LocalDateTime.of(2015, 1, 1, 12, 00, 00), 100, 50));
        RestResponse<List<Task>> expected = RestResponse.<List<Task>>builder().withContent(content).build();

        Gson gson = JsonUtil.DefaultGsonBuilder.create();
        String json = gson.toJson(expected);
        System.out.println(json);
        RestResponse<List<Task>> actual = gson.fromJson(json, RestfulController.TaskListType);

        assertThat(actual.content.getClass().getName(), is(expected.content.getClass().getName()));
        assertThat(actual.content.size(), is(expected.content.size()));
        assertThat(actual.content.get(0).getGuid(), is(expected.content.get(0).getGuid()));
        assertThat(actual.content.get(0).getName(), is(expected.content.get(0).getName()));
        assertThat(actual.content.get(0).getDescription(), is(expected.content.get(0).getDescription()));
        assertTrue(actual.content.get(0).getDueDate().isEqual(expected.content.get(0).getDueDate()));
        assertThat(actual.content.get(0).getEffort(), is(expected.content.get(0).getEffort()));
        assertThat(actual.content.get(0).getProgress(), is(expected.content.get(0).getProgress()));
    }
}
