package bitcorn.system.database;

public final class Command {

    public final String ACTION = "action";

    private final String context;
    private final String action;

    public Command(String context, String action) {
        this.context = context;
        this.action = action;
    }

    public String getContext() {
        return context;
    }

    public String getAction() {
        return action;
    }
}
