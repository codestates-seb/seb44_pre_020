package com.codestates.PreProject.member.controller;

// TODO : Member controller class implementation

import com.codestates.PreProject.dto.MultiResponseDto;
import com.codestates.PreProject.member.dto.MemberDto;
import com.codestates.PreProject.member.dto.MemberSignUpDto;
import com.codestates.PreProject.response.ListResponseDto;
import com.codestates.PreProject.response.SingleResponseDto;
import com.codestates.PreProject.member.entity.Member;
import com.codestates.PreProject.member.mapper.MemberMapper;
import com.codestates.PreProject.member.service.MemberService;
import com.codestates.PreProject.util.UriCreator;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/Members")
@Validated
@Slf4j
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/Members";

    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    @PostMapping("/signup")
    public ResponseEntity signupMember(@Valid @RequestBody MemberSignUpDto memberSignUpDto){
        Member member = memberService
                .createMember(mapper.MemberSignUpDtoToMember(memberSignUpDto));
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, member.getMemberId());

        return ResponseEntity.created(location).build();
    }

    // TODO: login과 logout 구현 예정 -- JWT 인증 방식 도입
    @PostMapping("/login")
    public ResponseEntity loginMember(){
        return null;
    }

    @PostMapping("/logout")
    public ResponseEntity logoutMember(){
        return null;
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.Patch requestBody) {
        requestBody.setMemberId(memberId);

        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member)),
                HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long memberId) {
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(
                new SingleResponseDto<>(mapper.memberToMemberResponse(member))
                , HttpStatus.OK);
    }

//    @GetMapping
//    public ResponseEntity getMembers(@Positive @RequestParam int page,
//                                     @Positive @RequestParam int size) {
//        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
//        List<Member> members = pageMembers.getContent();
//        return new ResponseEntity<>(
//                new MultiResponseDto<>(mapper.membersToMemberResponses(members),
//                        pageMembers),
//                HttpStatus.OK);
//    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
