package bitcorn.system.exceptions;

@SuppressWarnings("WeakerAccess")
public class DatabaseException extends Exception {
    public DatabaseException(String message) {
        super(message);
    }
}
