package com.example.medlab.controllers;

import com.example.medlab.model.LoginRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@Tag(name = "Auth")
@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private UserDetailsService userDetailsService;

    public AuthController(UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Operation(summary = "Authenticate an user")
    @PostMapping("/login")
    public ResponseEntity<UserDetails> authenticateUser(@RequestBody LoginRequest loginRequest) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getUsername());
        if (userDetails != null && new BCryptPasswordEncoder().matches(loginRequest.getPassword(),userDetails.getPassword())) {
            return ResponseEntity.ok(userDetails);
        }else {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
        }
    }

//    @Operation(summary = "Authenticate an user")
//    @PostMapping("/login")
//    public ResponseEntity<AppUser> authenticateUser(@RequestBody LoginRequest loginRequest) {
//        AppUser user = userService.getUserByUsername(loginRequest.getUsername());
//        if (user != null && new BCryptPasswordEncoder().matches(loginRequest.getPassword(),user.getPassword())) {
//            return ResponseEntity.ok(user);
//        }else {
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid username or password");
//        }
//    }
}
