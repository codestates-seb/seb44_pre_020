package com.codestates.PreProject.answer.entity;

import com.codestates.PreProject.comment.entity.AnswerComment;
import com.codestates.PreProject.comment.entity.Comment;
import com.codestates.PreProject.question.entity.Question;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// User, Question, Vote entity Mapping Implemented

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    private Long id;

//     TODO : 차후 Question에도 JPA 적용 필요
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @OneToMany(mappedBy = "answer")
    private List<AnswerComment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "VOTE_ID")
    private Vote vote;

    public Answer(String content, User user) {
        this.content = content;
        this.user = user;
        this.vote = new Vote();
        this.accepted = false;
    }

    private Boolean accepted;

    public Long getVoteCount() {
        return this.vote.getVoteCnt();
    }

    public void setVoteCount(Long updateVoteCnt) {
        this.vote.setVoteCnt(updateVoteCnt);
    }



}
