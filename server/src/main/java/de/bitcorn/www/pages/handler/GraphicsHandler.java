package de.bitcorn.www.pages.handler;

import de.bitcorn.www.system.Actions;
import de.bitcorn.www.system.database.Commands;
import de.bitcorn.www.system.defaults.Eventbuses;
import de.bitcorn.www.system.defaults.Keywords;
import de.bitcorn.www.system.defaults.Symbols;
import de.bitcorn.www.system.types.CommandType;
import de.bitcorn.www.system.types.GraphicType;
import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.ext.web.RoutingContext;

public class GraphicsHandler implements IHandler {

    private final Vertx vertx;

    private final GraphicType graphicType;

    public GraphicsHandler(Vertx vertx, GraphicType graphicType) {
        this.vertx = vertx;
        this.graphicType = graphicType;
    }

    @Override
    public Handler<RoutingContext> getHandler(Actions operation) {
        switch (operation) {
            case READ:
                return this::readGraphicsInformation;
            default:
                throw new UnsupportedOperationException();
        }
    }

    private void readGraphicsInformation(RoutingContext context) {
        final String key = CommandType.ACTION.getName();
        String value = Symbols.EMPTY;

        if (graphicType.equals(GraphicType.TEXTURE)) {
            value = Commands.Graphics.TextureGraphics.READ;
        } else if (graphicType.equals(GraphicType.VECTOR_GRAPHIC)) {
            value = Commands.Graphics.VectorGraphics.READ;
        }

        final DeliveryOptions options = new DeliveryOptions().addHeader(key, value);
        this.sendToVerticle(vertx, Eventbuses.Verticles.DATABASE, context, options);
    }

    @Override
    public void sendToVerticle(Vertx vertx, String verticle, RoutingContext context, DeliveryOptions options) {
        final String data = context.getBodyAsString();

        vertx.eventBus().send(verticle, data, options, reply -> {
            if (reply.succeeded()) {
                final String httpStatuscode = reply.result().headers().get(Keywords.HTTP_STATUS_CODE);
                final int statusCode = Integer.valueOf(httpStatuscode);
                final String graphicListings = (String) reply.result().body();

                context.response()
                        .setStatusCode(statusCode)
                        .putHeader("content-type", "application/json; charset=utf-8")
                        .end(graphicListings);
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });
    }
}
