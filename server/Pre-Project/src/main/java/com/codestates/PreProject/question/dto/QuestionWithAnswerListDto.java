package com.codestates.PreProject.question.dto;


import com.codestates.PreProject.answer.dto.AnswerResponseDto;
import com.codestates.PreProject.answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Builder
@Getter
@Setter
public class QuestionWithAnswerListDto {
    private Long questionId;
    private String title;
    private String content;
    private Long viewCount;
    private long voteCnt;
    private List<Answer> answerList;
}
