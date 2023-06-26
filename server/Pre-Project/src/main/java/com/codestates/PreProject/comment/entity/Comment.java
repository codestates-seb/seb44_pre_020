package com.codestates.PreProject.comment.entity;

import com.codestates.PreProject.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

// Todo : Comment Entity Implementation

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Comment <T>{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column(nullable = false)
    @NotBlank(message = "댓글의 내용은 비워 둘 수 없습니다.")
    private String commentContent;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    private User user;

    @ManyToOne
    private T content;

}