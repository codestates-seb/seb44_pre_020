package com.codestates.PreProject.answer.entity;

//import com.codestates.PreProject.comment.entity.AnswerComment;
import com.codestates.PreProject.member.entity.Member;
import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// Member, Question, Vote entity Mapping Implemented

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

    // TODO : 차후 Question에도 JPA 적용 필요
//    @ManyToOne
//    @JoinColumn(name = "QUESTION_ID")
//    private Question question;
//
//    @OneToMany(mappedBy = "answer")
//    private List<AnswerComment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "member_ID")
    private Member member;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "VOTE_ID")
    private Vote vote;

    public Answer(String content, Member Member) {
        this.content = content;
        this.member = member;
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
