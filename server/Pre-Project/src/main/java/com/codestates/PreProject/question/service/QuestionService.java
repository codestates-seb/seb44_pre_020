package com.codestates.PreProject.question.service;

import com.codestates.PreProject.answer.service.AnswerService;
import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import com.codestates.PreProject.question.entity.Question;
import com.codestates.PreProject.question.repository.QuestionRepository;
import com.codestates.PreProject.user.service.UserService;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserService userService;


    public QuestionService(QuestionRepository questionRepository, UserService userService, AnswerService answerService) {
        this.questionRepository = questionRepository;
        this.userService = userService;
    }

    public Question createQuestion (Question question) {
        userService.findVerifiedUser(question.getUser().getUserId());
        return questionRepository.save(question);
    }

    public void deleteQuestion(long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        questionRepository.delete(findQuestion);
    }

    public Question updateQuestion(Question question, Long questionId, @NotBlank(message = "내용을 입력하세요") String content) {
        Question findQuestion = findVerifiedQuestion(questionId);
        Optional.ofNullable(question.getContent())
                .ifPresent(contents -> findQuestion.setContent(content));
        findQuestion.setModifiedAt(LocalDateTime.now()); // 최종 수정시간 현재 시간으로 변경

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }

    private Question findVerifiedQuestion(long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        return optionalQuestion
                .orElseThrow(() -> new LogicalException(ExceptionCode.QUESTION_NOT_FOUND));
    }

    public void setLikeVote(long questionId, long userId) {
        userService.findVerifiedUser(userId);
    }

    public long getVoteCount(long questionId) {
        Question question = findVerifiedQuestion(questionId);
        return question.getVoteCount();
    }
}
