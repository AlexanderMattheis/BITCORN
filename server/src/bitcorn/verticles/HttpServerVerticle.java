package bitcorn.verticles;

import bitcorn.system.Codes;
import bitcorn.system.Defaults;
import bitcorn.system.Messages;
import io.vertx.core.AbstractVerticle;

import io.vertx.core.http.HttpServer;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.StaticHandler;

import java.util.logging.Logger;

public class HttpServerVerticle extends AbstractVerticle {

    private static final Logger LOGGER = Logger.getLogger(HttpServerVerticle.class.getName());

    @Override
    public void start() throws Exception {
        LOGGER.info(LOGGER.getName());

        // create router
        Router router = createRouter();

        // create server
        HttpServer server = vertx.createHttpServer();
        server.requestHandler(router);  // requests are handled by a router
        server.listen(Defaults.HTTP_SERVER_PORT);  // on which port the server is waiting for requests

        LOGGER.info(Messages.STARTED_BOTH_SERVERS);
    }

    private Router createRouter() {
        // create router
        Router router = Router.router(vertx);

        // to allow reading the HTTP-body of request globally
        router.route().handler(BodyHandler.create());

        // links everything in the root "/" to everything
        // in the resources-folder "" (not recursively)
        router.get("/*").handler(StaticHandler.create(""));
        router.get("/home").handler(StaticHandler.create(""));

        // downloads
        // downloads/graphics
        router.get("/downloads/graphics").handler(StaticHandler.create(""));

        // downloads/programs
        router.get("/downloads/programs").handler(StaticHandler.create(""));

        router.get("/downloads/programs/bioinformatics").handler(StaticHandler.create(""));
        router.get("/downloads/programs/cross-dating").handler(StaticHandler.create(""));
        router.get("/downloads/programs/res").handler(StaticHandler.create(""));

        // tutorial

        // about
        router.get("/about/authors").handler(StaticHandler.create(""));
        router.get("/about/page").handler(StaticHandler.create(""));

        router.get("/contact/").handler(StaticHandler.create(""));
        router.get("/imprint/").handler(StaticHandler.create(""));
        router.get("/privacy/").handler(StaticHandler.create(""));

        // [api]
        router.post("/api/contact").handler(this::contactHandler);

        return router;
    }

    private void contactHandler(RoutingContext context) {
        JsonObject data = context.getBodyAsJson();
        System.out.println(data.getString("message"));

        context.response()
                .setStatusCode(Codes.CREATED.ordinal())
                .putHeader("content-type", "application/json; charset=utf-8")
                .end();
    }
}
