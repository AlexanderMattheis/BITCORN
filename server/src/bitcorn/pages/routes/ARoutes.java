package bitcorn.pages.routes;

import io.vertx.ext.web.Router;

abstract class ARoutes {
    protected Router router;

    ARoutes(Router router) {
        this.router = router;
    }

    public abstract void add();
}
