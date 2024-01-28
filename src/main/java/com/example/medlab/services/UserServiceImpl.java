package com.example.medlab.services;

import com.example.medlab.exceptions.OldPasswordNotMatchingException;
import com.example.medlab.exceptions.ResourceNotFoundException;
import com.example.medlab.model.Role;
import com.example.medlab.model.dto.user.UserCreationInput;
import com.example.medlab.model.dto.user.UserPassChangeInput;
import com.example.medlab.model.dto.user.UserRoleInput;
import com.example.medlab.model.entities.AppUser;
import com.example.medlab.repositories.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public AppUser saveUser(UserCreationInput userCreationInput) {
        AppUser appUser = new AppUser(userCreationInput);
        appUser.setPassword(new BCryptPasswordEncoder().encode(userCreationInput.getPassword()));
        return userRepository.save(appUser);
    }

    @Override
    public AppUser getUser(Long userId) {
        if (userExists(userId)) {
            return userRepository.findById(userId).get();
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    @Override
    public AppUser getUserByUsername(String username) {
        return userRepository.findUserByUsername(username);
    }

    @Override
    public List<AppUser> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void changeUserPassword(Long userId, UserPassChangeInput userInput) {
        if (userExists(userId)) {
            AppUser appUser = getUser(userId);
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (encoder.matches(userInput.getOldPassword(), appUser.getPassword())) {
                appUser.setPassword(new BCryptPasswordEncoder().encode(userInput.getNewPassword()));
                userRepository.save(appUser);
            } else {
                throw new OldPasswordNotMatchingException("Old password doesn't match.");
            }
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    @Override
    public void changeRole(Long userId, UserRoleInput role) {
        if (userExists(userId)) {
            AppUser appUser = getUser(userId);
            appUser.setRole(role.getRole());
            userRepository.save(appUser);
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    @Override
    public void deleteUser(Long userId) {
        if (userExists(userId)) {
            userRepository.deleteById(userId);
        } else {
            throw new ResourceNotFoundException("User not found");
        }
    }

    @Override
    public boolean userExists(Long userId) {
        return userRepository.existsById(userId);
    }

    @Override
    public boolean hasRole(Authentication authentication, Role role) {
        Optional<? extends GrantedAuthority> authWithExpectedRole = authentication.getAuthorities().stream().filter(auth -> auth.getAuthority().equalsIgnoreCase(role.toString())).findFirst();
        return authWithExpectedRole.isPresent();
    }
}
