package de.bitcorn.www;

import de.bitcorn.www.pages.verticles.DatabaseVerticle;
import de.bitcorn.www.pages.verticles.HttpVerticle;
import de.bitcorn.www.system.extension.util.logging.LoggerExtension;
import io.vertx.core.Future;
import io.vertx.core.Vertx;

import java.util.logging.Logger;

final class Launcher {

    private static final Logger LOGGER = Logger.getLogger(Launcher.class.getName());

    public static void main(final String[] args) {
        configureLogger();
        startServers();
    }

    private static void startServers() {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "startServers"));

        final Vertx vertx = Vertx.vertx();

        // A Future represents the result of an action that may, or may not, have
        // occurred yet.
        // String-type since an id is assigned to a verticle in case of successful
        // deployment
        final Future<String> dataBaseVerticleDeployment = Future.future();

        // input:
        // - Verticle verticle,
        // - IHandler<AsyncResult<String>> completionHandler (handler which is notified
        // in case of a deployment)
        // hint: deployment is an asynchronous task, so it can take some time until the
        // Verticle is deployed
        // hint 2: the database has to be deployed first, since the http-server can else
        // not retrieve the site data
        // hint 3: the future in dataBaseVerticleDeployment has to complete
        vertx.deployVerticle(new DatabaseVerticle(), dataBaseVerticleDeployment.completer());

        // compose
        // to tell an outer-object that deployment was successful
        // input: Function<T,Future<U>> mapper (so output has to be a future, that's why
        // a return value is necessary)
        dataBaseVerticleDeployment.compose(id -> {
            final Future<String> httpServerVerticleDeployment = Future.future();

            // the future httpServerVerticleDeployment is notified about a successful
            // deployment
            vertx.deployVerticle(new HttpVerticle(), httpServerVerticleDeployment.completer());

            return httpServerVerticleDeployment;
        });
    }

    private static void configureLogger() {
        System.setProperty("java.util.logging.SimpleFormatter.format", "%1$tF | %1$tT | %4$s | %5$s%n");
    }
}