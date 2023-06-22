package com.codestates.PreProject.user.dto;

import com.codestates.PreProject.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class UserDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;

        @NotBlank(message = "이름은 공백이 아니어야 합니다.")
        private String name;

        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다.")
        private String phone;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long userId;

//        @NotSpace(message = "회원 이름은 공백이 아니어야 합니다.")
        private String name;

//        @NotSpace(message = "휴대폰 번호는 공백이 아니어야 합니다")
        @Pattern(regexp = "^010-\\d{3,4}-\\d{4}$",
                message = "휴대폰 번호는 010으로 시작하는 11자리 숫자와 '-'로 구성되어야 합니다")
        private String phone;

        private User.UserStatus userStatus;


        public void setUserId(long userId) {
            this.userId = userId;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long memberId;
        private String email;
        private String name;
        private String phone;
        private User.UserStatus userStatus;

        public String getUserStatus() {
            return userStatus.getStatus();
        }
    }
}
