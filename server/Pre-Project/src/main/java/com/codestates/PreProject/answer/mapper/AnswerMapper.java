package com.codestates.PreProject.answer.mapper;

import com.codestates.PreProject.answer.dto.AnswerPatchDto;
import com.codestates.PreProject.answer.dto.AnswerPostDto;
import com.codestates.PreProject.answer.dto.AnswerResponseDto;
import com.codestates.PreProject.answer.entity.Answer;

import java.util.List;

public interface AnswerMapper {
    Answer answerPostDtotoAnswer(AnswerPostDto answerPostDto);


    Answer answerPatchDtotoAnswer(AnswerPatchDto answerPatchDto);

    AnswerResponseDto answerToAnswerResponseDto(Answer answer);

    List<AnswerResponseDto> answersToAnswerResponses(List<Answer> answers);
}
