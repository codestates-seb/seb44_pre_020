package com.codestates.PreProject.vote;
import com.codestates.PreProject.answer.entity.Answer;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.OneToOne;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class AnswerVote extends Vote<Answer>{
    @OneToOne
    private Answer answer;

}