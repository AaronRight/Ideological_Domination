package com.tengu.settings;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import com.google.gson.Gson;

import java.security.Principal;
import java.util.Map;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate template;

    private Gson gson = new Gson();

    @Autowired
    WebSocketController(SimpMessagingTemplate template){
        this.template = template;
    }

    @MessageMapping("/send/message")
    public void sendMessage(String message){
        System.out.println(message);
        this.template.convertAndSend("/message",  message);
    }

    @MessageMapping("/send/answer")
    @SendToUser("/user/send/message")
    public String answerMessage( @Payload String message,
                               Principal principal){
//        this.template.convertAndSend("/message",  message);
        return gson
                .fromJson(message, Map.class)
                .get("name").toString();
    }
}