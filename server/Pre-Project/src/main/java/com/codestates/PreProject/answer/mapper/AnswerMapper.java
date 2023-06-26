package com.codestates.PreProject.answer.mapper;

import com.codestates.PreProject.answer.dto.AnswerPatchDto;
import com.codestates.PreProject.answer.dto.AnswerPostDto;
import com.codestates.PreProject.answer.dto.AnswerResponseDto;
import com.codestates.PreProject.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(target = "question.questionId", source = "questionId")
    Answer answerPostDtoToAnswer(AnswerPostDto answerPostDto);

    @Mapping(target = "vote.voteCnt", source = "voteCnt")
    Answer answerPatchDtoToAnswer(AnswerPatchDto answerPatchDto);

    @Mapping(target = "voteCnt", source = "vote.voteCnt")
    AnswerResponseDto answerToAnswerResponseDto(Answer answer);
    
    List<AnswerResponseDto> answersToAnswerResponses(List<Answer> answers);
}
