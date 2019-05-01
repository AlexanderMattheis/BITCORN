package bitcorn.pages.verticles;

import bitcorn.pages.Routes;
import bitcorn.system.defaults.Ports;
import bitcorn.system.defaults.Messages;
import io.vertx.core.AbstractVerticle;

import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;

import java.util.logging.Logger;

public final class HttpServerVerticle extends AbstractVerticle {

    private static final Logger LOGGER = Logger.getLogger(HttpServerVerticle.class.getName());

    @Override
    public void start() {
        LOGGER.info(LOGGER.getName());

        // create router
        final Routes routes = new Routes(vertx);
        final Router router = routes.create();

        LOGGER.info(Messages.CREATED_ROUTES);

        // create server
        final HttpServer server = vertx.createHttpServer();
        server.requestHandler(router);  // requests are handled by a router
        server.listen(Ports.HTTP_SERVER_PORT);  // on which port the server is waiting for requests

        LOGGER.info(Messages.STARTED_BOTH_SERVERS);
    }
}
