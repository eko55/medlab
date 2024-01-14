package com.example.medlab.repositories;

import com.example.medlab.model.entities.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<AppUser, Long> {

    @Query("SELECT u FROM AppUser u WHERE u.username = ?1")
    AppUser findUserByUsername(String username);
}
