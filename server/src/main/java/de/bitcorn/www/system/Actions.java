package de.bitcorn.www.system;

public enum Actions {
    CREATE(1),
    READ(2);

    @SuppressWarnings({"FieldCanBeLocal", "unused"})
    private final int operation;

    @SuppressWarnings("SameParameterValue")
    Actions(int operation) {
        this.operation = operation;
    }
}
