package com.codestates.PreProject.question.entity;

import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.user.entity.User;
import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

// TODO 데이터베이스의 테이블과 매핑되는 객체(db 테이블, 구조, 필트를 나타냄)
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(nullable = false)
    @NotNull(message = "제목을 입력해주세요")
    private String title;

    @Column(nullable = false)
    @NotNull(message = "질문을 작성해주세요")
    private String content;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @Column(nullable = false)
    private Long viewCount = 0L;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "VOTE_ID")
    private Vote vote;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @OneToMany(mappedBy = "question")
    private List<Answer> answerList = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private List<Answer> answers;

    public Question(String title, String content) {
        this.title = title;
        this.content = content;
        this.vote = new Vote();
        this.answerList = new ArrayList<>();
    }

    public void initializeAnswerList() {
        this.answers = new ArrayList<>();
    }

    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

    public Long getVoteCount() {
        return this.vote.getVoteCnt();
    }

    public void setVoteCount(Long updateVoteCnt) {
        this.vote.setVoteCnt(updateVoteCnt);
    }}
