package com.codestates.PreProject.exception;

import lombok.Getter;

public class LogicalException extends RuntimeException {

    @Getter
    private ExceptionCode exceptionCode;
    public LogicalException(ExceptionCode e) {
        super(e.getMsg());
        this.exceptionCode = e;
    }
}