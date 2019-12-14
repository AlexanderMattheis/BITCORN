package de.bitcorn.www.pages.handler;

import io.vertx.core.eventbus.Message;

public interface IDatabaseHandler {
    void create(Message request);
    void read(Message request);
}
