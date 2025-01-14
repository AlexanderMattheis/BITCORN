package de.bitcorn.www.pages;

import de.bitcorn.www.pages.routes.Operations;
import de.bitcorn.www.pages.routes.Pages;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.BodyHandler;

public final class Routes {

    private final Vertx vertx;

    public Routes(Vertx vertx) {
        this.vertx = vertx;
    }

    public Router create() {
        // create router
        final Router router = Router.router(vertx);

        // to allow reading the HTTP-body of request globally
        router.route().handler(BodyHandler.create());

        new Pages(router).add();
        new Operations(router, vertx).add();

        return router;
    }
}
