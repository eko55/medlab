package com.example.medlab.controllers;

import com.example.medlab.exceptions.OldPasswordNotMatchingException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.dto.user.UserCreationInput;
import com.example.medlab.model.dto.user.UserPassChangeInput;
import com.example.medlab.model.dto.user.UserRoleInput;
import com.example.medlab.model.entities.AppUser;
import com.example.medlab.services.UserService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "Users")
@RestController
@RequestMapping("/users")
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @Operation(summary = "Create new user")
    @PostMapping
    public ResponseEntity<AppUser> createUser(@RequestBody UserCreationInput userCreationInput, UriComponentsBuilder builder) {

        AppUser createdAppUser = userService.saveUser(userCreationInput);

        URI locationOfTheNewUserRecord = builder
                .path("users/{id}")
                .buildAndExpand(createdAppUser.getId())
                .toUri();
        return ResponseEntity.created(locationOfTheNewUserRecord).body(createdAppUser);
    }

    @Operation(summary = "Get user")
    @GetMapping("/{userId}")
    public ResponseEntity<AppUser> getUser(@RequestParam Long userId) {
        try {
            return ResponseEntity.ok(userService.getUser(userId));
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
    }

    @Operation(summary = "Get users")
    @GetMapping()
    public ResponseEntity<List<AppUser>> getUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }

    @Operation(summary = "Change user password")
    @PutMapping("/{userId}")
    public ResponseEntity<Void> changeUserPassword(@RequestParam Long userId, @RequestBody UserPassChangeInput userInput) {
        try {
            userService.changeUserPassword(userId, userInput);
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        } catch (OldPasswordNotMatchingException e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage(), e);
        }
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Change user role")
    @PutMapping("/{userId}/roles")
    public ResponseEntity<Void> changeUserRole(@RequestParam Long userId, @RequestBody UserRoleInput role) {
        try {
            userService.changeRole(userId, role);
        } catch (ResourceNotFoundException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage(), e);
        }
        return ResponseEntity.noContent().build();
    }
}
