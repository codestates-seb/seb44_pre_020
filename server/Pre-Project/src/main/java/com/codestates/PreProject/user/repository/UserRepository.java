package com.codestates.PreProject.user.repository;

import com.codestates.PreProject.user.entity.User;
import org.mapstruct.Mapper;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
// User repo.

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(long userId);

    Optional<User> findByEmail(String email);

}
