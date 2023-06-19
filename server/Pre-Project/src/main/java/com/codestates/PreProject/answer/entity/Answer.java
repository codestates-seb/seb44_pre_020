package com.codestates.PreProject.answer.entity;

import com.codestates.PreProject.question.Question;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

// TODO : User, Question, Vote entity Mapping Implementation

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {
    @Id
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @ManyToOne
    @Column(updatable = false)
    private Question question;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToOne
    @JoinColumn(name = "VOTE_ID")
    private Vote vote;

    private Boolean accepted;

    public Long getVoteCountChange() {
        return this.getVote().getVoteCnt();
    }
}
