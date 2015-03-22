package me.roybailey.service;

import me.roybailey.model.Task;

import java.util.List;

/**
 * Simple data access object interface.
 */
public interface TaskService {

    Task getTaskById(String guid);

    List<Task> getTaskList(int skip, int limit);

    Integer getTaskTotal();
}
