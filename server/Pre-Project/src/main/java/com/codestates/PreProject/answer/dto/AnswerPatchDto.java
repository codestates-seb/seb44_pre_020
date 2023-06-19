package com.codestates.PreProject.answer.dto;

import com.codestates.PreProject.vote.Vote;
import lombok.Getter;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

// DTO implemented
@Getter
public class AnswerPatchDto {
    private long answerId;

    @NotBlank(message = "내용은 비워둘 수 없습니다.")
    @Column(nullable = false)
    private String content;

    private Vote vote;

    public void setVote(Vote vote) {
        this.vote = vote;
    }
}
