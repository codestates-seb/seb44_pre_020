/*
package com.codestates.PreProject.comment.repository;

import com.codestates.PreProject.comment.entity.AnswerComment;
import com.codestates.PreProject.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CommentRepository<T> extends JpaRepository<Comment<T>, Long> {
    Optional<Comment<T>> findByCommentId(long commentId);

    List<AnswerComment> findByContentId(Long contentId);
}
*/
