package com.codestates.PreProject.comment.mapper;

import com.codestates.PreProject.comment.dto.AnswerCommentResponseDto;
import com.codestates.PreProject.comment.dto.CommentPostDto;
import com.codestates.PreProject.comment.dto.CommentPatchDto;
import com.codestates.PreProject.comment.entity.Comment;
import com.codestates.PreProject.comment.entity.AnswerComment;
//import com.codestates.PreProject.comment.entity.QuestionComment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    AnswerComment commentPostDtoToAnswerComment(CommentPostDto commentPostDto);
//    AnswerComment commentPatchDtoToAnswerComment(CommentPatchDto commentPatchDto);
    AnswerComment commentResponseDtoToAnswerComment(AnswerCommentResponseDto commentResponseDto);
    List<AnswerCommentResponseDto> answerCommentsToCommentResponses(List<AnswerComment> comments);
    AnswerCommentResponseDto answerCommentToResponseDto(AnswerComment comment);

//    QuestionComment commentPostDtoToQuestionComment(CommentPostDto commentPostDto);
//    QuestionComment commentPatchDtoToQuestionComment(CommentPatchDto commentPatchDto);
//    QuestionComment commentResponseDtoToQuestionComment(CommentResponseDto commentResponseDto);
//    List<CommentResponseDto> questionCommentToCommentResponses(List<QuestionComment> comments);
//    CommentResponseDto questionCommentToResponseDto(QuestionComment comment);
}
