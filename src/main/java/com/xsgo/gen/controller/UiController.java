package com.xsgo.gen.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UiController {
    @RequestMapping("index")
    public String Index(){
        return "index";
    }
}
