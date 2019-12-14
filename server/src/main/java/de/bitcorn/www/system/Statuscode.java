package de.bitcorn.www.system;

public enum Statuscode {
    CREATED(201),
    INTERNAL_SERVER_ERROR(500),
    OK(200);

    private final int code;

    Statuscode(int code) {
        this.code = code;
    }

    public int getValue() {
        return code;
    }
}