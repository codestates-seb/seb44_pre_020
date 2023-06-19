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
    private Vote vote = new Vote();
    private boolean accepted;

//    public void upVote(Vote vote){
//        this.vote.setVoteCnt(vote.getVoteCnt() + 1);
//    }
//
//    public void downVote(Vote vote){
//        this.vote.setVoteCnt(vote.getVoteCnt() - 1);
//    }
}
