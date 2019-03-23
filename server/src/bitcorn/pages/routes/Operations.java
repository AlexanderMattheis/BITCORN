package bitcorn.pages.routes;

import bitcorn.pages.handler.Contact;
import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;

public class Operations extends ARoutes {

    private final Vertx vertx;

    public Operations(Router router, Vertx vertx) {
        super(router);
        this.vertx = vertx;
    }

    public void add() {
        addContact();
    }

    private void addContact() {
        final Contact contact = new Contact(vertx);
        router.post("/api/contact").handler(contact.getHandler(bitcorn.system.Operations.CREATE));
    }
}
