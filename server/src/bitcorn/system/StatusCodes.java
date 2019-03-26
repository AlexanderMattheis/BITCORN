package bitcorn.system;

public enum StatusCodes {
    CREATED(201),
    INTERNAL_SERVER_ERROR(500);

    private final int code;

    StatusCodes(int code) {
        this.code = code;
    }

    public int getValue() {
        return code;
    }
}