package com.codestates.PreProject.user.dto;
// dto Implementation

import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.question.entity.Question;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class UserResponseDto {
    private Long userId;
    private String username;
    private List<Answer> answers;
    private List<Question> questions;
    public void setUserId(long userId){
        this.userId = userId;
    }
}
