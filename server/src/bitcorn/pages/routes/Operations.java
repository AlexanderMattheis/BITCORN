package bitcorn.pages.routes;

import bitcorn.pages.handler.ContactHandler;
import bitcorn.system.Actions;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

public final class Operations extends ARoutes {

    private final Vertx vertx;

    public Operations(Router router, Vertx vertx) {
        super(router);
        this.vertx = vertx;
    }

    public void add() {
        addContact();
    }

    private void addContact() {
        final ContactHandler contact = new ContactHandler(vertx);
        router.post("/api/contact").handler(contact.getHandler(Actions.CREATE));
    }
}
