package com.codestates.PreProject.helper.event;

import com.codestates.PreProject.user.entity.User;

public class UserRegistrationApplicationEvent {
    private User user;
    public UserRegistrationApplicationEvent(User user) {
        this.user = user;
    }
}
