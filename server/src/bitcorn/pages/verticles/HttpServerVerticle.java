package bitcorn.pages.verticles;

import bitcorn.pages.Routes;
import bitcorn.system.defaults.Ports;
import bitcorn.system.defaults.Messages;
import io.vertx.core.AbstractVerticle;

import io.vertx.core.http.HttpServer;
import io.vertx.ext.web.Router;

import java.util.logging.Logger;

public class HttpServerVerticle extends AbstractVerticle {

    private static final Logger logger = Logger.getLogger(HttpServerVerticle.class.getName());

    @Override
    public void start() throws Exception {
        logger.info(logger.getName());

        // create router
        Routes routes = new Routes(vertx);
        Router router = routes.create();

        logger.info(Messages.CREATED_ROUTES);

        // create server
        HttpServer server = vertx.createHttpServer();
        server.requestHandler(router);  // requests are handled by a router
        server.listen(Ports.HTTP_SERVER_PORT);  // on which port the server is waiting for requests

        logger.info(Messages.STARTED_BOTH_SERVERS);
    }
}
