package com.example.medlab.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")  // Define the mapping path you want to enable CORS for
                .allowedOrigins("http://localhost:3000","http://localhost:5173") // or "*" for any origin
                .allowedMethods("GET", "POST", "PUT", "DELETE","OPTIONS")
                .allowCredentials(true)
                .maxAge(3600); // max age in seconds
    }
}
