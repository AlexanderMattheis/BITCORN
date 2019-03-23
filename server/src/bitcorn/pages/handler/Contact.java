package bitcorn.pages.handler;

import bitcorn.system.Operations;
import bitcorn.system.defaults.Eventbuses;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;

public class Contact {
    private final Vertx vertx;

    public Contact(Vertx vertx) {
        this.vertx = vertx;
    }

    public Handler<RoutingContext> getHandler(Operations operation) {
        switch (operation) {
            case CREATE:
                return this::createMessage;
        }

        return this::createMessage;
    }

    private void createMessage(RoutingContext context) {
        final JsonObject data = context.getBodyAsJson();

        vertx.eventBus().send(Eventbuses.Verticles.DATABASE, data, reply -> {
            if (reply.succeeded()) {
                int statusCode = (int) reply.result().body();

                context.response()
                        .setStatusCode(statusCode)
                        .putHeader("content-type", "application/json; charset=utf-8")
                        .end();
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });
    }
}
