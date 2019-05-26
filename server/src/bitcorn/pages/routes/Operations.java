package bitcorn.pages.routes;

import bitcorn.pages.handler.ContactHandler;
import bitcorn.pages.handler.GraphicsHandler;
import bitcorn.system.Actions;
import bitcorn.system.types.GraphicType;
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
        router.get("/api/graphics/vector_graphics").handler(graphics.getHandler(Actions.READ));
    }
}
