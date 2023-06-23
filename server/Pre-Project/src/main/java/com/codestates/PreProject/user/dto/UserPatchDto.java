package com.codestates.PreProject.user.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

// DTO Implementation
@Getter
public class UserPatchDto {
    private Long userId;

    @NotBlank(message = "회원 이름은 비워둘 수 없습니다.")
    private String username;

    public void setUserId(long userId){
        this.userId = userId;
    }

}
