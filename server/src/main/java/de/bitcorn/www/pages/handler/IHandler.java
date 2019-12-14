package de.bitcorn.www.pages.handler;

import de.bitcorn.www.system.Actions;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.ext.web.RoutingContext;

public interface IHandler {

    Handler<RoutingContext> getHandler(Actions operation);

    void sendToVerticle(Vertx vertx, String verticle, RoutingContext context, DeliveryOptions options);
}
