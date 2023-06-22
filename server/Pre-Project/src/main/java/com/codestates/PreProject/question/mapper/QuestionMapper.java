package com.codestates.PreProject.question.mapper;

import com.codestates.PreProject.question.dto.QuestionPatchDto;
import com.codestates.PreProject.question.dto.QuestionPostDto;
import com.codestates.PreProject.question.dto.QuestionResponseDto;
import com.codestates.PreProject.question.entity.Question;
import org.mapstruct.Mapper;

import javax.validation.Valid;
import java.util.List;

@Mapper(componentModel = "spring")

public interface QuestionMapper {
    Question questionPostDtoToQuestion(@Valid QuestionPostDto questionPostDto);

    Question questionPatchDtoToQuestion(@Valid QuestionPatchDto questionPostDto);

    QuestionResponseDto questionToQuestionResponseDto(Question question);

    List<QuestionResponseDto> questionsToQuestionResponses(List<Question> allQuestions);

}