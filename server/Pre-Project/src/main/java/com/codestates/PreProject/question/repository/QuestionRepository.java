package com.codestates.PreProject.question.repository;

import com.codestates.PreProject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

//TODO 데이터베이스에 접근하여 게시글 데이터를 조작하는 기능을 정의
@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findById(long questionId);
}
