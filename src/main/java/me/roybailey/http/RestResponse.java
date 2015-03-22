package me.roybailey.http;

import java.util.HashMap;
import java.util.Map;

/**
 * Standard response for a RESTful request returning some content and _links
 */
public class RestResponse<T> {

    public static class Builder<T> {

        private T content;
        private Map<String, Object> _links = new HashMap<>();

        public Builder() {
        }

        public Builder(T content) {
            this.content = content;
        }

        public Builder<T> withContent(T content) {
            this.content = content;
            return this;
        }

        public Builder<T> withLink(String name, String href, String description) {
            Map<String, Object> mapValues = new HashMap<>();
            mapValues.put("href", href);
            mapValues.put("description", description);
            this._links.put(name, mapValues);
            return this;
        }

        public RestResponse<T> build() {
            return new RestResponse<>(this.content, this._links);
        }
    }

    public static <T> Builder<T> builder(T content) {
        return new RestResponse.Builder<>(content);
    }

    public static <T> Builder<T> builder() {
        return new RestResponse.Builder<>();
    }

    //
    //
    //

    public T content;
    public Map<String, Object> _links;

    public RestResponse(T content, Map<String, Object> links) {
        this.content = content;
        this._links = links;
    }
}
