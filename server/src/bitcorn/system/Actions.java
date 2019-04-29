package bitcorn.system;

public enum Actions {
    CREATE(1);

    @SuppressWarnings({"FieldCanBeLocal", "unused"})
    private final int operation;

    @SuppressWarnings("SameParameterValue")
    Actions(int operation) {
        this.operation = operation;
    }
}
