package com.codestates.PreProject.answer.controller;

// TODO : controller class implementation

import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.answer.mapper.AnswerMapper;
import com.codestates.PreProject.answer.service.AnswerService;
import com.codestates.PreProject.util.UriCreator;
import lombok.Value;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

import java.net.URI;

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

    @PostMapping("/{answer-id}")
    public ResponseEntity postAnswer(@Valid @RequestBody AnswerPostDto answerPostDto){
        Answer answer = answerService.createAnswer(mapper.answerPostDtotoAnswer(answerPostDto));
        URI location = UriCreator.createUri(ANS_DEF_URL, answer.getAnswerId());
        return ResponseEntity.created(location).build();
    }
}
