package bitcorn.pages.handler;

import bitcorn.system.Actions;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.ext.web.RoutingContext;

public interface IHandler {

    Handler<RoutingContext> getHandler(Actions operation);

    void sendToVerticle(Vertx vertx, String verticle, RoutingContext context, DeliveryOptions options);
}
