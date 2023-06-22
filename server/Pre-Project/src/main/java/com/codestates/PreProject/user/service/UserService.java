package com.codestates.PreProject.user.service;
import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
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

    // update implemented
    public User updateUser(User user, @Positive long userId) {
        User findUser = findVerifiedUser(userId);

        Optional.ofNullable(user.getAnswers())
                .ifPresent(findUser::setAnswers);
        Optional.ofNullable(user.getEmail())
                .ifPresent(findUser::setEmail);

        if (findUser.getAnswers() == null){
            findUser.setAnswers(new ArrayList<>());
        }

        if (findUser.getQuestions() == null){
            findUser.setQuestions(new ArrayList<>());
        }

        return userRepository.save(findUser);
    }

    public List<User> findUsers() {
        return userRepository.findAll();
    }

    public void deleteUser(long userId) {
        User findUser = findVerifiedUser(userId);
        userRepository.delete(findUser);
    }
}
