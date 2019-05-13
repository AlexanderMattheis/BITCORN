package bitcorn.system.defaults;

public interface Messages {
    String CREATED_ROUTES = "Routes has been created.";
    String STARTED_BOTH_SERVERS = "Both servers has been started.";

    interface Exceptions {
        String NO_CONNECTION = "The establishment of a connection to the database was not possible.";
        String NO_CONTEXT = "The commands' context does not equal one of the given contexts.";
    }
}
