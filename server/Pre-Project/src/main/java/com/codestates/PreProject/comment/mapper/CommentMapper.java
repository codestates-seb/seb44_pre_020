package com.codestates.PreProject.comment.mapper;

import com.codestates.PreProject.comment.dto.CommentPatchDto;
import com.codestates.PreProject.comment.dto.CommentPostDto;
import com.codestates.PreProject.comment.dto.CommentResponseDto;
import com.codestates.PreProject.comment.entity.Comment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper <T>{
    Comment<T> commentPostDtoToComment(CommentPostDto commentPostDto);
    Comment<T> commentPatchDtoToComment(CommentPatchDto commentPatchDto);
    Comment<T> commentResponseDtoToComment(CommentResponseDto commentResponseDto);
    List<CommentResponseDto> commentToCommentResponses(List<Comment> comments);
    CommentResponseDto commentToResponseDto(Comment comment);
}
