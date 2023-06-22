package com.codestates.PreProject.question.mapper;

import com.codestates.PreProject.answer.dto.AnswerPatchDto;
import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.question.dto.QuestionPatchDto;
import com.codestates.PreProject.question.dto.QuestionPostDto;
import com.codestates.PreProject.question.dto.QuestionResponseDto;
import com.codestates.PreProject.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import javax.validation.Valid;
import java.util.List;

@Mapper(componentModel = "spring")

public interface QuestionMapper {
    Question questionPostDtoToQuestion(@Valid QuestionPostDto questionPostDto);

    @Mapping(target = "vote.voteCnt", source = "content")
    Question questionPatchDtoToQuestion(@Valid QuestionPatchDto questionPostDto);

    @Mapping(target = "voteCnt", source = "vote.voteCnt")
    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> allQuestions);

}