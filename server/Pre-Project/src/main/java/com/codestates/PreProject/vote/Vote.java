package com.codestates.PreProject.vote;

import com.codestates.PreProject.answer.entity.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Vote <T> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @Column(nullable = false)
    public Long voteCnt = 0L;

    @OneToOne
    // mapping은 각 구현체에서...
    private T content;

    public void setContent(T content){
        this.content = content;
    }
}