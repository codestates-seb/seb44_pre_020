package com.codestates.PreProject.user.mapper;

import com.codestates.PreProject.user.dto.UserPatchDto;
import com.codestates.PreProject.user.dto.UserResponseDto;
import com.codestates.PreProject.user.dto.UserSignUpDto;
import com.codestates.PreProject.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

// Todo: Interface mapper implementation

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userSignUpDtoToUser(UserSignUpDto userSignUpDto);

    User userPatchDtoToUser(UserPatchDto userPatchDto);

    UserResponseDto userToUserResponseDto(User user);

    List<UserResponseDto> userToUserResponses(List<User> users);
}
