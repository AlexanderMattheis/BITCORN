package bitcorn.pages.handler;

import io.vertx.core.eventbus.Message;

public interface ICrudBase {
    void create(Message request);
}
