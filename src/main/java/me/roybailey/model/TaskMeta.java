package me.roybailey.model;

import java.io.Serializable;

/**
 * Simple Task Meta object to return any meta data about tasks.
 */
public class TaskMeta implements Serializable {

    private Integer total;

    public TaskMeta(Integer total) {
        this.total = total;
    }

    public Integer getTotal() {
        return total;
    }

    @Override
    public String toString() {
        return "TaskMeta{" +
                "total=" + total +
                '}';
    }
}
