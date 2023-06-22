package com.codestates.PreProject.question.controller;


import com.codestates.PreProject.question.dto.QuestionPatchDto;
import com.codestates.PreProject.question.dto.QuestionPostDto;
import com.codestates.PreProject.question.entity.Question;
import com.codestates.PreProject.question.mapper.QuestionMapper;
import com.codestates.PreProject.question.service.QuestionService;
import com.codestates.PreProject.response.ListResponseDto;
import com.codestates.PreProject.response.SingleResponseDto;
import com.codestates.PreProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

import java.net.URI;

// TODO 클라이언트로부터의 HTTP 요청을 처리하는 클래스
// 게시글 관련 요청을 처리하고, 필요한 데이터를 서비스 클래스로 전달하거나 응답을 생성하여 클라이언트에게 반환
// RESTful 웹 서비스에서는 주로 JSON 형태의 데이터를 반환하게 됨. 컨트롤러는 URL 매핑과 요청 처리를 담당함.

@RestController
@RequestMapping("")
@Validated
@Slf4j
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }
    // TODO 질문 CREATE
    @PostMapping("/questions")
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());
        return ResponseEntity.created(location).build();
    }

    // TODO 질문 추천
    @PostMapping("/questions/likevote/{question-id}")
    public ResponseEntity setLikeVote(@PathVariable("question-id") long questionId, @Positive @RequestParam long userId) {
        questionService.setLikeVote(questionId, userId);

        return new ResponseEntity(new SingleResponseDto<>(questionService.getVoteCount(questionId)), HttpStatus.OK);
    }

    // TODO 질문 수정
    @PatchMapping("/questions/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable("question-id") @Positive long questionId,
                                      @Valid @RequestBody QuestionPatchDto questionPatchDto){
        Question question = questionService
                .updateQuestion(mapper.questionPatchDtoToQuestion(questionPatchDto),
                        questionId, questionPatchDto.getTitle());

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)), HttpStatus.OK);
    }

    // TODO 질문 조회
    @GetMapping("/questions/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") @Positive long questionId){
        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.questionToQuestionResponseDto(question)),HttpStatus.OK);
    }

    // TODO 전체 질문 조회
    @GetMapping("/questions")
    public ResponseEntity getAllQuestions() {
        List<Question> allQuestions = questionService.getAllQuestions();

        return new ResponseEntity(new ListResponseDto<>(mapper.questionsToQuestionResponses(allQuestions)), HttpStatus.OK);
    }

    // TODO 질문 삭제
    @DeleteMapping("/questions/{question-id}")
    public ResponseEntity deleteMember(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}