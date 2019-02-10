package bitcorn.verticles.container;

import java.util.concurrent.atomic.AtomicInteger;

public class Thing {
    // By using multiple threads it could happen
    // that two objects would get the same id
    // and to avoid this, an AtomicInteger is used
    // which guarantees unique ids.
    private static final AtomicInteger uniqueIdGenerator = new AtomicInteger();

    private final int id;

    private String name;

    private String origin;

    public Thing(String name, String origin, int id) {
        this.id = id;
        this.name = name;
        this.origin = origin;
    }

    public Thing(String name, String origin) {
        this.id = uniqueIdGenerator.getAndIncrement();
        this.name = name;
        this.origin = origin;
    }

    public Thing() {
        this.id = uniqueIdGenerator.getAndIncrement();
    }

    public String getName() {
        return name;
    }

    public String getOrigin() {
        return origin;
    }

    public int getId() {
        return id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }
}