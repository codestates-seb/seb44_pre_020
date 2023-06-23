package com.codestates.PreProject.comment.service;

import com.codestates.PreProject.comment.dto.CommentPostDto;
import com.codestates.PreProject.comment.entity.AnswerComment;
import com.codestates.PreProject.comment.entity.Comment;
import com.codestates.PreProject.comment.repository.CommentRepository;
import com.codestates.PreProject.exception.ExceptionCode;
import com.codestates.PreProject.exception.LogicalException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

// Service layer implementation

@Service
public class CommentService <T> {
    private final CommentRepository<T> commentRepository;

    public CommentService(CommentRepository<T> commentRepository) {
        this.commentRepository = commentRepository;
    }

    public Comment<T> createComment(Comment<T> comment) {
        return commentRepository.save(comment);
    }

    public Comment<T> findVerifiedComment(long commentId) {
        Optional<Comment<T>> optionalTComment =
                commentRepository.findById(commentId);
        return optionalTComment
                .orElseThrow(() -> new LogicalException(ExceptionCode.COMMENT_NOT_FOUND));
    }

    public List<Comment<T>> findComments() {
        return commentRepository.findAll();
    }

    public void deleteComment(long commentId) {
        Comment<T> findComment = findVerifiedComment(commentId);
        commentRepository.delete(findComment);
    }

    public List<AnswerComment> findCommentsByAnswerId(Long contentId) {
        return commentRepository.findByContentId(contentId);
    }
}