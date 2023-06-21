package com.codestates.PreProject.question.entity;

import com.codestates.PreProject.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

// TODO 데이터베이스의 테이블과 매핑되는 객체(db 테이블, 구조, 필트를 나타냄)
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "posts")
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

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long voteCount;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    public Question(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

    public void setVoteCount(long voteCount) {
        this.voteCount = voteCount;
    }
}
