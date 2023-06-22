package com.codestates.PreProject.answer.dto;

// DTO implemented

import com.codestates.PreProject.user.entity.User;
import lombok.Getter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

@Getter
public class AnswerPostDto {
    @NotBlank(message = "내용은 비워둘 수 없습니다.")
    private String content;

    @Positive
    private long userId;

    public User getUser(){
        User user = new User();
        user.setUserId(userId);
        return user;
    }
}
