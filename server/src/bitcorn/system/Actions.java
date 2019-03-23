package bitcorn.system;

public enum Actions {
    CREATE(1);

    private final int operation;

    Actions(int operation) {
        this.operation = operation;
    }

    public int getValue() {
        return operation;
    }
}
