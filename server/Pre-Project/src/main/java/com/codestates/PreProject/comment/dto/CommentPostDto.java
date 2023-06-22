package com.codestates.PreProject.comment.dto;

import lombok.Getter;

import javax.persistence.Column;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

// DTO implementation

@Getter
public class CommentPostDto <T> {
    @NotBlank(message = "댓글의 내용은 비워 둘 수 없습니다.")
    private String commentContent;

    @Positive
    private long userId;
}
