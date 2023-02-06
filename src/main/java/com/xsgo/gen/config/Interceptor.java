package com.xsgo.gen.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.annotation.Resource;

@Configuration
public class Interceptor implements WebMvcConfigurer {
    @Resource
    private CorsConfig corsConfig;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //注册自定义跨域拦截器
        registry.addInterceptor(corsConfig).addPathPatterns("/**");
    }
}
