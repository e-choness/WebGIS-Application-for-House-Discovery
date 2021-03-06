package com.zsy.data.collect.house_spider.service.processor;

import com.zsy.data.collect.house_spider.dao.RedisDAO;
import com.zsy.data.collect.house_spider.model.Region;
import com.zsy.data.collect.house_spider.utils.IOUtil;
import net.minidev.json.JSONArray;
import org.apache.commons.lang3.StringUtils;
import us.codecraft.webmagic.Page;
import us.codecraft.webmagic.Site;
import us.codecraft.webmagic.Spider;
import us.codecraft.webmagic.processor.PageProcessor;
import us.codecraft.webmagic.selector.Selectable;

import java.util.ArrayList;
import java.util.List;

public class RegionProcessor implements PageProcessor {

    private List<Region> regionList;

    private String name;

    private String briefName;

    public RegionProcessor(){}

    public RegionProcessor(String name,  String briefName){
        this.regionList = new ArrayList<>();
        this.name = name;
        this.briefName = briefName;
    }

    RedisDAO redisDAO = new RedisDAO();

    // 部分一：抓取网站的相关配置，包括编码、抓取间隔、重试次数等
    private Site site = Site.me()
            .setRetryTimes(3)
            .setSleepTime(1000)
            .addHeader("Accept-Encoding", "gzip, deflate, br")
            .addHeader("Accept-Language", "zh-CN,zh;q=0.9")
            .addHeader("Accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3")
            .addHeader("User-Agent", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Safari/537.36");

    /**
     * process是定制爬虫逻辑的核心接口，在这里编写抽取逻辑
     */
    @Override
    public void process(Page page) {
        try {
            // 部分二：定义如何抽取页面信息，并保存下来
            if (!page.getHtml().xpath("//div[@data-role='ershoufang']").match()){
                page.setSkip(true);
            }
            //开始提取页面信息
            System.out.println(page.getUrl().toString());
            List<Selectable> regions = page.getHtml().xpath("//div[@data-role='ershoufang']/div[1]/a").nodes();
            regions.forEach(e -> {
                Region region = new Region();
                String regionName = e.xpath("a/text()").toString();
                String regionUrl = e.xpath("a/@href").toString();
                region.setName(regionName);
                region.setBriefName(StringUtils.substringBetween(regionUrl, "/ershoufang/", "/"));
                System.out.println("区域：" + regionName);
                System.out.println("  |——链接：" + regionUrl);
                regionList.add(region);
            });
            //存redis
            redisDAO.setList(name, regionList);
            //存成json文件
            String jsonstr = JSONArray.toJSONString(regionList);
            IOUtil.outFile(jsonstr, "regions.json");

        }catch (Exception eee){
            eee.printStackTrace();
        }
    }


    @Override
    public Site getSite() {
        return site;
    }

    public void startProcessor(String url, String name, String briefName){
        Spider.create(new RegionProcessor(name, briefName))
                //从"https://nj.lianjia.com/ershoufang/"开始抓
                .addUrl(url)
                //开启2个线程抓取
                .thread(1)
                //启动爬虫
                .run();
    }

    public static void main(String[] args){
    }



}
