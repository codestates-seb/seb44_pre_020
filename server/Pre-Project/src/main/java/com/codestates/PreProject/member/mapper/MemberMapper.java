package com.codestates.PreProject.member.mapper;

import com.codestates.PreProject.member.dto.MemberDto;
import com.codestates.PreProject.member.dto.MemberPatchDto;
import com.codestates.PreProject.member.dto.MemberResponseDto;
import com.codestates.PreProject.member.dto.MemberSignUpDto;
import com.codestates.PreProject.member.entity.Member;
import com.codestates.PreProject.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

// Interface mapper implemented

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMemberResponses(List<Member> members);

    Member MemberSignUpDtoToMember(MemberSignUpDto memberSignUpDto);
}
