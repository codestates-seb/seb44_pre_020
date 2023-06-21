package com.codestates.PreProject.user.service;

import com.codestates.PreProject.question.exception.ExceptionCode;
import com.codestates.PreProject.question.exception.LogicalException;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    public User findVerifiedUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser
                .orElseThrow(() -> new LogicalException(ExceptionCode.USER_NOT_FOUND));
    }
}