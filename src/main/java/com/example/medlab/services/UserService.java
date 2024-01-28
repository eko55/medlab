package com.example.medlab.services;

import com.example.medlab.model.Role;
import com.example.medlab.model.dto.user.UserCreationInput;
import com.example.medlab.model.dto.user.UserPassChangeInput;
import com.example.medlab.model.dto.user.UserRoleInput;
import com.example.medlab.model.entities.AppUser;
import org.springframework.security.core.Authentication;

import java.util.List;

public interface UserService {

    AppUser saveUser(UserCreationInput userCreationInput);

    AppUser getUser(Long userId);

    AppUser getUserByUsername(String username);

    List<AppUser> getUsers();

    void changeUserPassword(Long userId, UserPassChangeInput userInput);

    void changeRole(Long userId, UserRoleInput role);

    void deleteUser(Long userId);

    boolean userExists(Long userId);

    boolean hasRole(Authentication authentication, Role role);
}
