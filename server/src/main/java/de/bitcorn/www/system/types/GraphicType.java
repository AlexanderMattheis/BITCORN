package de.bitcorn.www.system.types;

public enum GraphicType {
    TEXTURE("TEXTURE"),
    VECTOR_GRAPHIC("VECTOR_GRAPHIC");

    private String name;

    GraphicType(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}
