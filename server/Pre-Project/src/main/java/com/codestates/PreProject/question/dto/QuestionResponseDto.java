package com.codestates.PreProject.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class QuestionResponseDto {
    private Long questionId;
    private String title;
    private String content;
    private Long viewCount;
    private Long voteCnt;

}