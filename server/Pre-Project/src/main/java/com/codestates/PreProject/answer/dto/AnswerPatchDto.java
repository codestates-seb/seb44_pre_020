package com.codestates.PreProject.answer.dto;

import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

// DTO implemented
@Getter
public class AnswerPatchDto {
    private Long answerId;

    @NotBlank(message = "내용은 비워둘 수 없습니다.")
    @Column(nullable = false)
    private String content;

    @Range(min = -1, max = 1, message = "유효한 값은 -1 또는 1이어야 합니다.")
    private Long voteCnt;

    private Boolean accepted;
}
