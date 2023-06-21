package com.codestates.PreProject.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
public class QuestionPostDto {
    @Valid
    @Positive
    private long questionId;

    @NotBlank(message="제목을 입력하세요")
    private String title;

    @NotBlank(message="질문을 입력하세요")
    private String content;

}
