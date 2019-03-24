package bitcorn.pages.handler;

import bitcorn.system.Actions;
import bitcorn.system.database.Commands;
import bitcorn.system.defaults.Eventbuses;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;

public final class ContactHandler {
    private final Vertx vertx;

    public ContactHandler(Vertx vertx) {
        this.vertx = vertx;
    }

    public Handler<RoutingContext> getHandler(Actions operation) {
        switch (operation) {
            case CREATE:
                return this::createMessage;
            default:
                return this::nop;
        }
    }

    private void createMessage(RoutingContext context) {
        final JsonObject data = context.getBodyAsJson();
        final DeliveryOptions options = new DeliveryOptions().addHeader(Commands.ACTION, Commands.Contact.CREATE);

        vertx.eventBus().send(Eventbuses.Verticles.DATABASE, data, options, reply -> {
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

    private void nop(RoutingContext context) {
        // NOP
    }
}
