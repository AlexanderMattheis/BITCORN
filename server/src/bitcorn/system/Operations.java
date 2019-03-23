package bitcorn.system;

public enum Operations {
    CREATE(1);

    private final int operation;

    Operations(int operation) {
        this.operation = operation;
    }

    public int getValue() {
        return operation;
    }
}
