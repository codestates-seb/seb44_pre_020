package com.codestates.PreProject.question.dto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class QuestionPatchDto {
    private long memberId;
    private long questionId;

    @NotBlank(message = "제목을 입력하세요")
    @Column(nullable = false)
    private String title;

    @NotBlank(message = "내용을 입력하세요")
    @Column(nullable = false)
    private String content;

    public void setQuestionId(long questionId) {
        this.questionId = questionId;
    }
}
