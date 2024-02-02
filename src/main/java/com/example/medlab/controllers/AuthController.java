package com.example.medlab.controllers;

import com.example.medlab.model.LoginRequest;
import com.example.medlab.model.entities.AppUser;
import com.example.medlab.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@Tag(name = "Auth")
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Authenticate an user")
    @PostMapping("/login")
    public AppUser authenticateUser(@RequestBody LoginRequest loginRequest) {
        AppUser user = userService.getUserByUsername(loginRequest.getUsername());
        if (user != null && new BCryptPasswordEncoder().matches(loginRequest.getPassword(),user.getPassword())) {
            return user;
        }else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
    }
}
