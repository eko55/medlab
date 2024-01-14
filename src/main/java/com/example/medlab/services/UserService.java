package com.example.medlab.services;

import com.example.medlab.model.dto.user.UserCreationInput;
import com.example.medlab.model.dto.user.UserPassChangeInput;
import com.example.medlab.model.dto.user.UserRoleInput;
import com.example.medlab.model.entities.AppUser;

import java.util.List;

public interface UserService {

    AppUser saveUser(UserCreationInput userCreationInput);

    AppUser getUser(Long userId);

    List<AppUser> getUsers();

    void changeUserPassword(Long userId, UserPassChangeInput userInput);

    void changeRole(Long userId, UserRoleInput role);

    void deleteUser(Long userId);

    boolean userExists(Long userId);
}
