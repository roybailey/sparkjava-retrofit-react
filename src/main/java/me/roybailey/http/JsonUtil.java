package me.roybailey.http;

import com.google.gson.*;

import java.lang.reflect.Type;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

/**
 * Json utility service to centralize the tooling and settings
 */
public class JsonUtil {

    private static class DateTimeSerializer implements JsonSerializer<LocalDateTime> {

        public JsonElement serialize(LocalDateTime src, Type typeOfSrc, JsonSerializationContext context) {
            String isoDateTime = src.format(DateTimeFormatter.ISO_DATE_TIME);
            return new JsonPrimitive(isoDateTime);
        }
    }

    private static class DateTimeDeserializer implements JsonDeserializer<LocalDateTime> {
        public LocalDateTime deserialize(JsonElement json, Type typeOfT, JsonDeserializationContext context)
                throws JsonParseException {
            return LocalDateTime.parse(json.getAsJsonPrimitive().getAsString(), DateTimeFormatter.ISO_DATE_TIME);
        }
    }

    public static GsonBuilder DefaultGsonBuilder = new GsonBuilder()
            .registerTypeAdapter(LocalDateTime.class, new DateTimeSerializer())
            .registerTypeAdapter(LocalDateTime.class, new DateTimeDeserializer());


}
