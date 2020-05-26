package com.heian.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class CommentController {

    @GetMapping("message")
    public String message(){
        return "message";
    }
}
