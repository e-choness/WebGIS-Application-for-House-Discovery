package com.zsy.data.collect.house_spider.model;

import java.io.Serializable;

public class Region implements Serializable {

    private String name;

    private String briefName;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBriefName() {
        return briefName;
    }

    public void setBriefName(String briefName) {
        this.briefName = briefName;
    }

    @Override
    public String toString() {
        return "Region{" +
                "name='" + name + '\'' +
                ", briefName='" + briefName + '\'' +
                '}';
    }
}
