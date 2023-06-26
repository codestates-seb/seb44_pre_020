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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

// TODO 클라이언트로부터의 HTTP 요청을 처리하는 클래스
// 게시글 관련 요청을 처리하고, 필요한 데이터를 서비스 클래스로 전달하거나 응답을 생성하여 클라이언트에게 반환
// RESTful 웹 서비스에서는 주로 JSON 형태의 데이터를 반환하게 됨. 컨트롤러는 URL 매핑과 요청 처리를 담당함.

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/questions")
@Validated
@Slf4j
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/questions";

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, AnswerService answerService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }
    @PostMapping
    public ResponseEntity postQuestion(@Valid @RequestBody QuestionPostDto questionPostDto){
        Question question = questionService.createQuestion(mapper.questionPostDtoToQuestion(questionPostDto));
        URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, question.getQuestionId());
        return ResponseEntity.created(location).build();
    }

    @PostMapping("/{question-id}/{vote-cnt}")
    public ResponseEntity postVote
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
        List<Question> questions = questionService.getAllQuestions();
        return new ResponseEntity(new ListResponseDto<>(mapper.questionsToQuestionResponses(questions)), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteMember(@PathVariable("question-id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}