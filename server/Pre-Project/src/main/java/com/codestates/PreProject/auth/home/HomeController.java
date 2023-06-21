package com.codestates.PreProject.auth.home;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/hello-oauth2")
    public String home() {
        return "hello-oauth2";
    }
}