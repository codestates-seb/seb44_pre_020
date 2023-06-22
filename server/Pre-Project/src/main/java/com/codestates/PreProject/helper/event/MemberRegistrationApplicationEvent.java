package com.codestates.PreProject.helper.event;

import com.codestates.PreProject.member.entity.Member;

public class MemberRegistrationApplicationEvent {
    private Member member;
    public MemberRegistrationApplicationEvent(Member member) {
        this.member = member;
    }
}
