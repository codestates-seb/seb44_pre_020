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
public class Vote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long voteId;

    @Column(nullable = false)
    public Long voteCnt;

    @OneToOne
    private Answer answer;

    public void setAnswer(Answer answer){
        this.answer = answer;
    }
}
