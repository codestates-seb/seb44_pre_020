package com.codestates.PreProject.user.service;

// Todo : user Service layer Implementation

import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.util.List;
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

    public User createUser(User user) {
        verifyEmailExists(user.getEmail());
        return userRepository.save(user);
    }

    private void verifyEmailExists(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new LogicalException(ExceptionCode.USER_EXISTS);
    }

    // TODO : updateAnswer implementation
    public User updateAnswer(User userPatchDtoToUser, @Positive long userId) {
        return null;
    }

    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }
}
