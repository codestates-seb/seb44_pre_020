package com.codestates.PreProject.exception;

import lombok.Getter;

public class BusinessLogicException extends RuntimeException {
    @Getter
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMsg());
        this.exceptionCode = exceptionCode;
    }
}