package de.bitcorn.www.pages.routes;

import io.vertx.ext.web.Router;

abstract class ARoutes {
    @SuppressWarnings("WeakerAccess")
    protected final Router router;

    ARoutes(Router router) {
        this.router = router;
    }

    @SuppressWarnings("unused")
    public abstract void add();
}
