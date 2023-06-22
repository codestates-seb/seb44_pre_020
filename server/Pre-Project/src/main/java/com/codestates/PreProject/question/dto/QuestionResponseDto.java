package com.codestates.PreProject.question.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class QuestionResponseDto {
    private long questionId;
    private String title;
    private String content;
    private long viewCount;
    private long voteCnt;

}
