package com.codestates.PreProject.question.exception;

import lombok.Getter;

public enum ExceptionCode {
    QUESTION_NOT_FOUND(04, "Member not found"),
    ANSWER_NOT_FOUND(404, "Member not found"),
    USER_NOT_FOUND(404, "User not found");
    ExceptionCode(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    @Getter
    private int status;
    @Getter
    private String msg;
}