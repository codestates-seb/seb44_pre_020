package com.codestates.PreProject.member.repository;

import com.codestates.PreProject.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Member repo.

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findById(long MemberId);

    static Optional<Member> findByEmail(String email);

}
