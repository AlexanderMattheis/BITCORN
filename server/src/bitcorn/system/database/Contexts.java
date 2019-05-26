package bitcorn.system.database;

public enum Contexts {
    CONTACT("CONTACT"),
    TEXTURES("TEXTURES"),
    VECTOR_GRAPHICS("VECTOR_GRAPHICS");

    private final String context;

    @SuppressWarnings("SameParameterValue")
    Contexts(String context) {
        this.context = context;
    }

    public String getContext() {
        return context;
    }
}