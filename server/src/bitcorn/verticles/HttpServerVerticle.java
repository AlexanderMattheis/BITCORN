package bitcorn.verticles;

import bitcorn.system.Defaults;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;
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

        // downloads


        return router;
    }
}
