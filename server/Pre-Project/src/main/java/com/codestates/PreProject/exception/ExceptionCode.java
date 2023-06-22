package com.codestates.PreProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
//    MEMBER_EXISTS(409, "Member exists"),
    QUESTION_NOT_FOUND(404, "Question not found"),
//    QUESTION_CODE_EXISTS(409, "Question Code exists");
    ANSWER_NOT_FOUND(404, "Member not found"),
    Member_NOT_FOUND(404, "Member not found"),
    Member_EXISTS(409, "Member already exists");
    

    ExceptionCode(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    @Getter
    private int status;
    @Getter
    private String msg;

}
