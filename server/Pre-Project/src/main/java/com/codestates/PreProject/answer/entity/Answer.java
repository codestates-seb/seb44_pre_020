package com.codestates.PreProject.answer.entity;

import com.codestates.PreProject.vote.Vote;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

// TODO : entity class implementation
// TODO : User, Question, Vote entity Mapping Implementation

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer {
    @Id
    private Long answerId;

    private String content;

    private LocalDateTime created_date;

    private Long questionId;

    private Long userId;

    // Todo : 이거 Long으로 변경?할지 고민중
    private Vote vote;

    private Boolean accepted;
}
