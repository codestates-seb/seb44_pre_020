package com.codestates.PreProject.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class MemberSignUpDto {
    @NotBlank
    @Email
    private String email;

    @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
            message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
    private String phoneNumber;

    @NotBlank(message = "이름은 비워둘 수 없습니다.")
    private String Membername;

    @NotBlank(message = "비밀번호는 비워둘 수 없습니다.")
    private String password;
}
