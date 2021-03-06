package com.zsy.data.collect.house_spider.service.email;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.UnsupportedEncodingException;
import java.util.Iterator;
import java.util.Map;
import java.util.Properties;

@Service("emailService")
public class EmailService {
    private static final String HOST = "smtp.163.com";
    private static final Integer PORT = 25;
    private static final Integer ALI_PORT = 465;
    private static final String USERNAME = "XXX@163.com";
    private static final String PASSWORD = "XXX";
    private static final String EMAILFORM = "XXX@163.com";
    private static JavaMailSenderImpl mailSender = createAliMailSender();


    private static JavaMailSenderImpl createAliMailSender() {
        JavaMailSenderImpl sender = new JavaMailSenderImpl();
        sender.setHost(HOST);
        sender.setPort(ALI_PORT);
        sender.setUsername(USERNAME);
        sender.setPassword(PASSWORD);
        sender.setDefaultEncoding("Utf-8");
        Properties prop = new Properties();
        prop.setProperty("mail.smtp.port",ALI_PORT.toString());
        prop.setProperty("mail.smtp.socketFactory.class","javax.net.ssl.SSLSocketFactory");
        prop.setProperty("mail.smtp.socketFactory.fallback","false");
        prop.setProperty("mail.smtp.socketFactory.port",ALI_PORT.toString());
        sender.setJavaMailProperties(prop);
        return sender;
    }

    /**
     * 发送邮件
     * @throws MessagingException 异常
     * @throws UnsupportedEncodingException 异常
     * @detail Windows和Mac上的分支，用mailSender即可，部署阿里云的server分支需要用aliMailSender
     */
    public static void sendHtmlMail(String toEmail, String url, String message) throws MessagingException, UnsupportedEncodingException {
        String subject = "Lyon's warning of House Spider!";
        String content = "<html><p>您好：" + toEmail +
                ",您的爬虫异常挂掉了请从此<a href=" + url + ">链接</a>重新爬取！</p><p>异常信息：" + message + "</p></html>";
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        // 设置utf-8或GBK编码，否则邮件会有乱码
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        messageHelper.setFrom(EMAILFORM, "");
        messageHelper.setTo(toEmail);
        messageHelper.setSubject(subject);
        messageHelper.setText(content,true);
        mailSender.send(mimeMessage);
    }

    public static void sendMail(String toEmail, String url, String message) {
        try {
            String subject = "Lyon's warning of House Spider!";
            String content = "<html><p>您好：" + toEmail +
                    ",您的爬虫异常挂掉了请从此<a href=" + url + ">链接</a>重新爬取！</p><p>异常信息：" + message + "</p></html>";
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            // 设置utf-8或GBK编码，否则邮件会有乱码
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            messageHelper.setFrom(EMAILFORM, "");
            messageHelper.setTo(toEmail);
            messageHelper.setSubject(subject);
            messageHelper.setText(content,true);
            mailSender.send(mimeMessage);
        } catch (MessagingException e) {
            e.printStackTrace();
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
    }

    /**
     * 发送邮件
     *
     * @param mailMap 收件人与邮件内容集合
     * @throws MessagingException 异常
     */
    public static void sendHtmlMail(Map<String, String> mailMap) throws MessagingException{
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        // 设置utf-8编码
        MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        messageHelper.setFrom(EMAILFORM);
        Iterator<String> iterator = mailMap.keySet().iterator();
        while (iterator.hasNext()) {
            messageHelper.setTo(iterator.next());
            messageHelper.setText(mailMap.get(iterator.next()), true);
            mailSender.send(mimeMessage);
        }
    }
}
