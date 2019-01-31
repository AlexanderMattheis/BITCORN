package bitcorn.verticles;

import bitcorn.system.Commands;
import bitcorn.system.Defaults;
import bitcorn.system.Parameters;
import bitcorn.system.Paths;
import bitcorn.verticles.data.Thing;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.http.HttpServer;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;

public class HttpServerVerticle extends AbstractVerticle {

    private HttpServer server;
    private Router router;

    @Override
    public void start() throws Exception {
        // create router
        router = createRouter();

        // create server
        server = vertx.createHttpServer();
        server.requestHandler(router);  // requests are handled by a router
        server.listen(Defaults.HTTP_SERVER_PORT);  // on which port the server is waiting for requests

        System.out.println("HTTP-Server started!");
    }

    private Router createRouter() {
        // create router
        Router router = Router.router(vertx);

        // to allow reading the HTTP-body of request globally
        router.route().handler(BodyHandler.create());

        // links everything in the root "/" to everything
        // in the resources-folder "" (not recursively)
        router.get("/*").handler(StaticHandler.create(""));

        // api
        router.post("/api/stuff").handler(this::additionHandler);
        router.delete("/api/stuff/:id").handler(this::deletionHandler);
        router.get("/api/stuff").handler(this::fetchHandler);

        // assets
        router.get("/assets/*").handler(StaticHandler.create("assets/"));

        // images

        // tests
        router.get("/tests/*").handler(StaticHandler.create("tests/*"));

        return router;
    }

    private void additionHandler(RoutingContext context) {
        // to deliver the ADD_ONE command over the event-bus
        DeliveryOptions options = new DeliveryOptions().addHeader(Parameters.Delivery.COMMAND, Commands.ADD_ONE);

        // input: String address, Object message, DeliveryOptions options, Handler<AsyncResult<Message<T>>> replyHandler
        // hint: the message is in this case "{name: name, origin: origin}"
        vertx.eventBus().send(Paths.Eventbus.Addresses.DATABASE_QUEUE, context.getBodyAsString(), options, reply -> {
            if (reply.succeeded()) {
                Thing thing = new Thing(
                        context.getBodyAsJson().getString("name"),
                        context.getBodyAsJson().getString("origin"),
                        (int) reply.result().body());

                // return the returned thing as JSON
                context.response()
                        .setStatusCode(201)  // Created: request successful and resource "thing" has been created before message
                        .putHeader("content-type", "application/json; charset=utf-8")
                        .end(Json.encodePrettily(thing));  // encode: encodes a POJO into a JSON
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });


    }

    private void deletionHandler(RoutingContext context) {
        // the id which has been passed through the URL
        // url: '/api/stuff/' + id
        String id = context.request().getParam("id");

        // to deliver the DELETE_ONE command over the event-bus
        DeliveryOptions options = new DeliveryOptions().addHeader(Parameters.Delivery.COMMAND, Commands.DELETE_ONE);

        // input: String address, Object message, DeliveryOptions options, Handler<AsyncResult<Message<T>>> replyHandler
        // hint: the message is in this case "{name: name, origin: origin}"
        vertx.eventBus().send(Paths.Eventbus.Addresses.DATABASE_QUEUE, id, options, reply -> {
            if (reply.succeeded()) {
                context.response().setStatusCode((int) reply.result().body()).end();
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });
    }

    private void fetchHandler(RoutingContext context) {
        // to deliver the FETCH_ALL command over the event-bus
        DeliveryOptions options = new DeliveryOptions().addHeader(Parameters.Delivery.COMMAND, Commands.FETCH_ALL);

        // input: String address, Object message, DeliveryOptions options, Handler<AsyncResult<Message<T>>> replyHandler
        vertx.eventBus().send(Paths.Eventbus.Addresses.DATABASE_QUEUE, new JsonObject(), options, reply -> {  // empty object
            if (reply.succeeded()) {
                // result() returns the message from which it is looked at the body
                String response = (String) reply.result().body();

                context.response()
                        .putHeader("content-type", "application/json; charset=utf-8")  // HTTP Header
                        .end(response);  // writes into the HTTP-body a JSON as String and lets the HTTP-body end
            } else {
                context.fail(reply.cause());  // HTTP-Error 500: Internal Server Error
            }
        });
    }
}
