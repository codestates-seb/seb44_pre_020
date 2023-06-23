package com.codestates.PreProject.user.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class UserSignUpDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "이름은 비워둘 수 없습니다.")
    private String username;

    @NotBlank(message = "비밀번호는 비워둘 수 없습니다.")
    private String password;
}
