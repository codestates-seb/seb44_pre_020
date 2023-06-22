package com.codestates.PreProject.user.controller;

// User controller class implementation

import com.codestates.PreProject.answer.dto.AnswerPatchDto;
import com.codestates.PreProject.response.ListResponseDto;
import com.codestates.PreProject.response.SingleResponseDto;
import com.codestates.PreProject.user.dto.UserPatchDto;
import com.codestates.PreProject.user.dto.UserSignUpDto;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.user.mapper.UserMapper;
import com.codestates.PreProject.user.service.UserService;
import com.codestates.PreProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Validated
@Slf4j
public class UserController {
    private final static String USR_DEF_URL = "/users";

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    private UserService userService;
    private UserMapper mapper;

    @PostMapping("/signup")
    public ResponseEntity signupUser(@Valid @RequestBody UserSignUpDto userSignUpDto){
        User user = userService
                .createUser(mapper.userSignUpDtoToUser(userSignUpDto));
        URI location = UriCreator.createUri(USR_DEF_URL, user.getUserId());

        return ResponseEntity.created(location).build();
    }

    // TODO: login과 logout 구현 예정 -- JWT 인증 방식 도입
    @PostMapping("/login")
    public ResponseEntity loginUser(){
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity logoutUser(){
        return null;
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") @Positive long userId,
                                    @Valid @RequestBody UserPatchDto userPatchDto){
        User user = userService.updateUser(
                mapper.userPatchDtoToUser(userPatchDto),
                userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user)), HttpStatus.ACCEPTED);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") @Positive long userId){
        User user = userService.findVerifiedUser(userId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.userToUserResponseDto(user))
                , HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(){
        List<User> users = userService.findUsers();
        return new ResponseEntity<>(
                new ListResponseDto<>(
                        mapper.userToUserResponses(users)),
                HttpStatus.OK
        );
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") @Positive long userId){
        userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}

