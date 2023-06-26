package com.codestates.PreProject.answer.repository;


import com.codestates.PreProject.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

// Answer Repo implemented
public interface AnswerRepository extends JpaRepository<Answer, Long> {
    Optional<Answer> findById(long answerId);
}