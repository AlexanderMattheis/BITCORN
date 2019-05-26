package bitcorn.pages.references;

public final class ElementReference {
    protected final String path;
    protected final String name;

    public ElementReference(String path, String name) {
        this.path = path;
        this.name = name;
    }

    public String getPath() {
        return path;
    }

    public String getName() {
        return name;
    }
}
