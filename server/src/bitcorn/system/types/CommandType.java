package bitcorn.system.types;

public enum CommandType {
    ACTION("ACTION");

    private String name;

    CommandType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
