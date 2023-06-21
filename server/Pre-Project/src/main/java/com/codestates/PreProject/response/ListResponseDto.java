package com.codestates.PreProject.response;

import java.util.ArrayList;
import java.util.Collection;

public class ListResponseDto <T> extends ArrayList<T> {
    public ListResponseDto(Collection<? extends T> collection) {
        super(collection);
    }
}
