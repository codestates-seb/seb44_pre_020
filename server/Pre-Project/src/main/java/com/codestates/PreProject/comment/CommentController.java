/*
package com.codestates.PreProject.comment;

import com.codestates.PreProject.comment.dto.CommentPostDto;
import com.codestates.PreProject.comment.dto.CommentResponseDto;
import com.codestates.PreProject.comment.entity.AnswerComment;
import com.codestates.PreProject.comment.entity.Comment;
import com.codestates.PreProject.comment.mapper.CommentMapper;
import com.codestates.PreProject.comment.service.CommentService;
import com.codestates.PreProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/{content}/comments")
@Validated
@Slf4j

public class CommentController <T> {
    private final static String COMMENT_DEF_URL = "/{content}/comments";

    private final CommentService commentService;
    private final CommentMapper mapper;

    public CommentController(CommentService commentService, CommentMapper mapper) {
        this.commentService = commentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity createComment(@PathVariable("content") String content,
                                        @RequestBody CommentPostDto commentDto) {
        // content 값에 따라서 해당 댓글을 어떤 객체에 연결할지 처리하는 로직 작성
        if (content.equals("answers")) {
            // answers에 대한 댓글 처리 로직
        } else if (content.equals("questions")) {
            // questions에 대한 댓글 처리 로직
        }

        // 댓글 생성 로직 수행
        Comment<T> createdComment =
                commentService.createComment(mapper.commentPostDtoToComment(commentDto));

        // 생성된 댓글 정보를 반환
        URI location = UriCreator.createUri(COMMENT_DEF_URL, createdComment.getCommentId());
        return ResponseEntity.created(location).build();
    }
}
*/
