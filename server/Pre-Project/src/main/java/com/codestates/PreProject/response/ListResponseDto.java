package com.codestates.PreProject.response;

import lombok.Getter;

import java.util.ArrayList;
import java.util.Collection;

@Getter
public class ListResponseDto<T> extends ArrayList<T> {
    public ListResponseDto(Collection<? extends T> collection) {
        super(collection);
    }
}
