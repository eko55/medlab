package com.example.medlab.exceptions;

public class NoAssignedRoleException extends RuntimeException {

    private String message;

    public NoAssignedRoleException(String message) {
        super(message);
        this.message = message;
    }
}
