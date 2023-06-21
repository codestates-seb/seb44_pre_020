package com.codestates.PreProject.exception;

import lombok.Getter;

public enum ExceptionCode {
    ANSWER_NOT_FOUND(404, "Member not found"),
    USER_NOT_FOUND(404, "User not found"),
    USER_EXISTS(409, "User already exists"),
    COMMENT_NOT_FOUND(404, "Comment not found"),
    INVALID_CONTENT(400, "This Content is invalid");
    // 필요시 다른 Exceptioncode들도 추가
    ExceptionCode(int status, String msg) {
        this.status = status;
        this.msg = msg;
    }

    @Getter
    private int status;
    @Getter
    private String msg;
}
