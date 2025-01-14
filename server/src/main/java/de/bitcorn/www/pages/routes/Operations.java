package de.bitcorn.www.pages.routes;

import de.bitcorn.www.pages.handler.ContactHandler;
import de.bitcorn.www.pages.handler.GraphicsHandler;
import de.bitcorn.www.system.Actions;
import de.bitcorn.www.system.types.GraphicType;
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
        getTextureGraphicListings();
        getVectorGraphicListings();
    }

    private void addContact() {
        final ContactHandler contact = new ContactHandler(vertx);
        router.post("/api/contact").handler(contact.getHandler(Actions.CREATE));
    }

    private void getTextureGraphicListings() {
        final GraphicsHandler graphics = new GraphicsHandler(vertx, GraphicType.TEXTURE);
        router.get("/api/graphics/textures").handler(graphics.getHandler(Actions.READ));
    }

    private void getVectorGraphicListings() {
        final GraphicsHandler graphics = new GraphicsHandler(vertx, GraphicType.VECTOR_GRAPHIC);
        router.get("/api/graphics/vector-graphics").handler(graphics.getHandler(Actions.READ));
    }
}
