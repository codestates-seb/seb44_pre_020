package com.codestates.PreProject.answer.controller;

// controller class implemented

import com.codestates.PreProject.answer.dto.AnswerPatchDto;
import com.codestates.PreProject.answer.dto.AnswerPostDto;
import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.answer.mapper.AnswerMapper;
import com.codestates.PreProject.answer.service.AnswerService;
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

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/answers")
@Validated
@Slf4j
public class AnswerController {
    private final static String ANS_DEF_URL = "/answers";

    public AnswerController(AnswerService answerService, AnswerMapper mapper) {
        this.answerService = answerService;
        this.mapper = mapper;
    }

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    @PostMapping
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));
        URI location = UriCreator.createUri(ANS_DEF_URL, answer.getId());
        return ResponseEntity.created(location).build();
    }

    // Todo: Move vote up/ down to post method
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerPatchDto answerPatchDto){
        Answer answer = answerService
                .updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto),
                        answerId,
                        answerPatchDto.getVoteCnt());
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)), HttpStatus.OK);
    }

    @PostMapping("/{answer-id}/{vote-cnt}")
    public ResponseEntity postUpVote
            (@PathVariable("answer-id") Long answerId,
             @PathVariable("vote-cnt") Long voteCnt) {
        // todo : vote goes up or down - implementation
        Answer findAnswer = answerService.findAnswer(answerId);
        findAnswer = answerService.updateAnswer(findAnswer, answerId, voteCnt);

        return new ResponseEntity(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(findAnswer)), HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer(@PathVariable("answer-id") @Positive long answerId){
        Answer answer = answerService.findAnswer(answerId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers() {
        List<Answer> answers = answerService.findAnswers();
        return new ResponseEntity<>(
                new ListResponseDto<>(
                        mapper.answersToAnswerResponses(answers)),
                HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteMember(
            @PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}