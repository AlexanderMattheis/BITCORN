package bitcorn.system.defaults;

public final class Messages {
    private static final String MESSAGE_MARKER = "+ ";

    public static final String CREATED_ROUTES = MESSAGE_MARKER + "Routes has been created.";
    public static final String STARTED_BOTH_SERVERS = MESSAGE_MARKER + "Both servers has been started.";

    public final class Exceptions {
        public static final String NO_CONNECTION = "The establishment of a connection to the database was not possible.";
        public static final String NO_CONTEXT = "The commands' context does not equal one of the given contexts.";
    }
}
