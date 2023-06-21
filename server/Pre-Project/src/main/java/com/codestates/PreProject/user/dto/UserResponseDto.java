package com.codestates.PreProject.user.dto;
// dto Implementation

import com.codestates.PreProject.answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class UserResponseDto {
    private Long userId;
    private String username;
    private String phoneNumber;
    private List<Answer> answers;
    public void setUserId(long userId){
        this.userId = userId;
    }
}
