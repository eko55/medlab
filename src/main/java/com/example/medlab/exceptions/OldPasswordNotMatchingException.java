package com.example.medlab.exceptions;

public class OldPasswordNotMatchingException extends RuntimeException {

    private String message;

    public OldPasswordNotMatchingException(String message) {
        super(message);
        this.message = message;
    }
}
