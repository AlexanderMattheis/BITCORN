package bitcorn.system.database;

public enum Contexts {
    CONTACT("CONTACT");

    private final String context;

    Contexts(String context) {
        this.context = context;
    }

    public String getContext() {
        return context;
    }
}