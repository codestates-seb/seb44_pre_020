package com.codestates.PreProject.answer.dto;

// DTO implemented

import com.codestates.PreProject.vote.Vote;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class AnswerResponseDto {
    private long answerId;
    private String content;
    private long voteCnt;
    private long questionId;
    private boolean accepted;
}
