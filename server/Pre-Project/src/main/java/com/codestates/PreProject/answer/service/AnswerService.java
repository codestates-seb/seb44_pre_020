package com.codestates.PreProject.answer.service;

import com.codestates.PreProject.answer.entity.Answer;
import com.codestates.PreProject.answer.repository.AnswerRepository;
import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import com.codestates.PreProject.user.service.UserService;
import com.codestates.PreProject.vote.Vote;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


// Service layer implemented
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final UserService userService;

    public AnswerService(AnswerRepository answerRepository, UserService userService) {
        this.answerRepository = answerRepository;
        this.userService = userService;
    }

    public Answer createAnswer(Answer answer) {
        userService.findVerifiedUser(answer.getUser().getUserId());


        return answerRepository.save(answer);
    }

    public List<Answer> findAnswers() {
        return answerRepository.findAll();
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        answerRepository.delete(findAnswer);
    }

    public Answer updateAnswer(Answer answer, Long answerId, Long voteCnt) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Optional.ofNullable(answer.getAccepted())
                .ifPresent(accepted -> findAnswer.setAccepted(accepted));

        if (findAnswer.getVote() == null) {
            findAnswer.setVote(new Vote());
        }

        findAnswer.setVoteCount(findAnswer.getVoteCount() + voteCnt);
        findAnswer.setModifiedAt(LocalDateTime.now()); // 최종 수정시간 현재 시간으로 변경

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }
    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);

        return optionalAnswer
                .orElseThrow(() -> new LogicalException(ExceptionCode.ANSWER_NOT_FOUND));
    }
}
