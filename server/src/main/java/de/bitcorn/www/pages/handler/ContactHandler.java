package de.bitcorn.www.pages.handler;

import de.bitcorn.www.system.Actions;
import de.bitcorn.www.system.database.Commands;
import de.bitcorn.www.system.defaults.Eventbuses;
import de.bitcorn.www.system.defaults.Keywords;
import de.bitcorn.www.system.types.CommandType;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;

public final class ContactHandler implements IHandler {

    private final Vertx vertx;

    public ContactHandler(Vertx vertx) {
        this.vertx = vertx;
    }

    public Handler<RoutingContext> getHandler(Actions operation) {
        switch (operation) {
            case CREATE:
                return this::createMessage;
            default:
                throw new UnsupportedOperationException();
        }
    }

    @Override
    public void sendToVerticle(Vertx vertx, String verticle, RoutingContext context, DeliveryOptions options) {
        final JsonObject data = context.getBodyAsJson();

        vertx.eventBus().send(verticle, data, options, reply -> {
            if (reply.succeeded()) {
                final String httpStatuscode = reply.result().headers().get(Keywords.HTTP_STATUS_CODE);
                final int statusCode = Integer.valueOf(httpStatuscode);

                context.response()
                        .setStatusCode(statusCode)
                        .putHeader("content-type", "application/json; charset=utf-8")
                        .end();
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });
    }

    private void createMessage(RoutingContext context) {
        final String key = CommandType.ACTION.getName();
        final String value = Commands.Contact.CREATE;
        final DeliveryOptions options = new DeliveryOptions().addHeader(key, value);

        this.sendToVerticle(vertx, Eventbuses.Verticles.DATABASE, context, options);
    }
}
