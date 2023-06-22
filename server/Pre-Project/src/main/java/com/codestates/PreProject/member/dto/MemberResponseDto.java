package com.codestates.PreProject.member.dto;
// dto Implementation

import com.codestates.PreProject.answer.entity.Answer;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class MemberResponseDto {
    private Long MemberId;
    private String Membername;
    private String phoneNumber;
    private List<Answer> answers;
    public void setMemberId(long MemberId){
        this.MemberId = MemberId;
    }
}
