package bitcorn.system;

public enum Codes {
    CREATED(201),
    INTERNAL_SERVER_ERROR(500);

    private final int code;

    Codes(int code) {
        this.code = code;
    }

    public int getValue() {
        return code;
    }
}