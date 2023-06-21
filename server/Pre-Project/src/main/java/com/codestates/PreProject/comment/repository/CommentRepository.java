package com.codestates.PreProject.comment.repository;

import com.codestates.PreProject.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CommentRepository<T> extends JpaRepository<Comment<T>, Long> {
    Optional<Comment<T>> findByCommentId(long contentId);
}
