package com.example.medlab.exceptions;

public class ResourceAlreadyExistsException extends RuntimeException {

    private String message;

    public ResourceAlreadyExistsException(String message) {
        super(message);
        this.message = message;
    }
}
