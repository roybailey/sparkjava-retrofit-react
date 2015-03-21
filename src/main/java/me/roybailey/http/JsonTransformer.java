package me.roybailey.http;


import com.google.gson.Gson;
import spark.ResponseTransformer;

public class JsonTransformer implements ResponseTransformer {

    private Gson jsonService = new Gson();

    @Override
    public String render(Object model) {
        String result = "";
        try {
            result = jsonService.toJson(model);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

}
