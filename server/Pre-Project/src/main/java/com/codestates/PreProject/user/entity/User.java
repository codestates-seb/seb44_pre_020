package com.codestates.PreProject.user.entity;


import com.codestates.PreProject.question.entity.Question;
import com.codestates.PreProject.answer.entity.Answer;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(nullable = false, unique = true)
    private String username;


    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false, name = "LAST_MODIFIED_AT")
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();


    public User(String email){
        this.email = email;
    }

    @Column(nullable = false, unique = true)
    private String phoneNumber;


    @Column(nullable = false)
    private String password;

    @Column(nullable = false, name = "CREATED_AT")
    private LocalDateTime createdAt = LocalDateTime.now();

    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    public User(String email, String phoneNumber, String username, String password) {
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.username = username;
        this.password = password;
        this.answers = new ArrayList<>();
    }

    public User(String email){
        this.email = email;
        this.answers = new ArrayList<>();
    }

    public void addAnswer(Answer answer){
        answers.add(answer);
    }

}




