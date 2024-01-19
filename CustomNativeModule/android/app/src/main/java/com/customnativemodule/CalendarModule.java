package com.customnativemodule;


import android.util.Log;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class CalendarModule extends ReactContextBaseJavaModule {
    CalendarModule(ReactApplicationContext context) {
        super(context);
    }

    @Override
    public String getName() {
        return "CalendarModule";
    }

    @ReactMethod()
    public void createCalendarEvent(String name, String location, Promise promise) {
        Log.d("CalendarModule", "create event called with name" + name + "and location" + location);
        promise.resolve("Hello,Welcome to Native Modules");
    }
}