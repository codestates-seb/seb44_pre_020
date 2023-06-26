package com.codestates.PreProject.question.controller;


import com.codestates.PreProject.answer.service.AnswerService;
import com.codestates.PreProject.question.dto.QuestionPatchDto;
import com.codestates.PreProject.question.dto.QuestionPostDto;
import com.codestates.PreProject.question.entity.Question;
import com.codestates.PreProject.question.mapper.QuestionMapper;
import com.codestates.PreProject.question.service.QuestionService;
import com.codestates.PreProject.response.ListResponseDto;
import com.codestates.PreProject.response.SingleResponseDto;
import com.codestates.PreProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.properties.bind.validation.ValidationErrors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";

    private final QuestionService questionService;
    private final AnswerService answerService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, AnswerService answerService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.answerService = answerService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){

        try {
            Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
            URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());
            return new ResponseEntity<>(mapper.questionToQuestionResponseDto(question), HttpStatus.CREATED);
        } catch (Exception e) {
            // 예외 처리 로직 작성
            e.printStackTrace(); // 예외를 콘솔에 출력
            return new ResponseEntity<>("Internal Server Error", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/{question-id}/{vote-cnt}")
    public ResponseEntity postUpVote
            (@PathVariable("question-id") Long questionId,
             @PathVariable("vote-cnt") Long voteCnt,
             @Positive @RequestParam Long userId) {
        // todo : vote goes up or down - implementation

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }

    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                      @Valid @RequestBody QuestionPatchDto questionPatchDto){
        Question question = questionService
                .updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto),
                        questionId, questionPatchDto.getTitle());

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),HttpStatus.OK);
    }

    @GetMapping()
    public ResponseEntity getQuestions() {
        List<Question> questions = questionService.getAllQuestionsWithAnswers();
        return new ResponseEntity(new ListResponseDto<>(mapper.questionsToQuestionResponses(questions)), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteMember(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}