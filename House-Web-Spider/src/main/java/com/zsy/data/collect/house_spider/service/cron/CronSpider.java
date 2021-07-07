package com.zsy.data.collect.house_spider.service.cron;

import com.zsy.data.collect.house_spider.dao.HouseDao;
import com.zsy.data.collect.house_spider.service.SpiderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;



@Component
@EnableScheduling
public class CronSpider {

    @Autowired
    SpiderService spiderService;

    /**
     * 每天20点10分执行，爬取上海房源
     */
    @Scheduled(cron = "0 10 20 * * ?")
    public void shanghaiTask() {
        String tableName = spiderService.generateTableName("上海");
        if(new HouseDao().createHouseTable(tableName)){
            // House spider >> 创建新表成功!
            spiderService.runCitySpider("上海",tableName);
        }
    }
}
