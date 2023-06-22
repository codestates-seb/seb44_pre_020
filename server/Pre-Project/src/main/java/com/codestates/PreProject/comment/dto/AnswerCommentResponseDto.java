package com.codestates.PreProject.comment.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// TODO : DTO implementation
//@Builder
@Getter
@NoArgsConstructor
public class AnswerCommentResponseDto {
    private Long commentId;
    private String commentContent;
    private Long userId;
    private Long AnswerId;
}