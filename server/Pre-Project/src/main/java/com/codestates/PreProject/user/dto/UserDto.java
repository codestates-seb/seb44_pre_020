package com.codestates.PreProject.user.dto;

import com.codestates.PreProject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserDto {

    private Long userId;

    @NotBlank(message = "회원 이름은 비워둘 수 없습니다.")
    private String username;

    @NotBlank(message = "휴대폰 번호는 비워둘 수 없습니다.")
    @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
            message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다")
    private String phoneNumber;

    public void setUserId(long userId){
        this.userId = userId;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long memberId;
        private String email;
        private String name;
        private String phone;
//        private User.UserStatus userStatus;
//
//        public String getUserStatus() {
//            return userStatus.getStatus();
//        }
    }
}
