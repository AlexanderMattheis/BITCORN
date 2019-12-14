package de.bitcorn.www.pages.verticles;

import de.bitcorn.www.pages.Routes;
import de.bitcorn.www.system.defaults.Ports;
import de.bitcorn.www.system.defaults.Messages;
import de.bitcorn.www.system.extension.util.logging.LoggerExtension;
import io.vertx.core.AbstractVerticle;

import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;

import java.util.logging.Logger;

public final class HttpVerticle extends AbstractVerticle {

    private static final Logger LOGGER = Logger.getLogger(HttpVerticle.class.getName());

    @Override
    public void start() {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "start"));

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
