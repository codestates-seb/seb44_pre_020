package com.codestates.PreProject.user.service;
import com.codestates.PreProject.auth.utils.CustomAuthorityUtils;
import com.codestates.PreProject.exception.BusinessLogicException;
import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import com.codestates.PreProject.helper.event.UserRegistrationApplicationEvent;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.user.repository.UserRepository;
import org.springframework.context.ApplicationEventPublisher;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final ApplicationEventPublisher publisher;

//    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository,
                         ApplicationEventPublisher publisher,
//                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.publisher = publisher;
//        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public User findVerifiedUser(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        return optionalUser
                .orElseThrow(() -> new LogicalException(ExceptionCode.USER_NOT_FOUND));
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
                .ifPresent(answers -> findUser.setAnswers(answers));
        Optional.ofNullable(user.getEmail())
                .ifPresent(email -> findUser.setEmail(email));

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


    public User createUser(User user) {
        verifyExistsEmail(user.getEmail());

        // (3) 추가: Password 암호화
//        String encryptedPassword = passwordEncoder.encode(user.getPassword());
//        user.setPassword(encryptedPassword);

        // (4) 추가: DB에 User Role 저장
        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedMember = userRepository.save(user);

        publisher.publishEvent(new UserRegistrationApplicationEvent(savedMember));
        return savedMember;
    }

    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }


}
