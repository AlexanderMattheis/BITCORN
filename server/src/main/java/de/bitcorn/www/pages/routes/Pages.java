package de.bitcorn.www.pages.routes;

import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public final class Pages extends ARoutes {

    public Pages(Router router) {
        super(router);
    }

    public void add() {
        addBase();
        addDownloads();
        addTutorials();
        addAbout();

        addLiabilities();
    }

    private void addBase() {
        // links everything in the root "/" to everything
        // in the resources-folder "" (not recursively)
        router.get("/*").handler(StaticHandler.create(""));
        router.get("/home").handler(StaticHandler.create(""));
    }

    private void addDownloads() {
        // downloads/graphics
        router.get("/downloads/graphics").handler(StaticHandler.create(""));

        router.get("/downloads/graphics/textures").handler(StaticHandler.create(""));
        router.get("/downloads/graphics/vector-graphics").handler(StaticHandler.create(""));

        // downloads/programs
        router.get("/downloads/programs").handler(StaticHandler.create(""));

        router.get("/downloads/programs/bioinformatics").handler(StaticHandler.create(""));
        router.get("/downloads/programs/cross-dating").handler(StaticHandler.create(""));
        router.get("/downloads/programs/res").handler(StaticHandler.create(""));
    }

    @SuppressWarnings("EmptyMethod")
    private void addTutorials() {
        // NOP
    }

    private void addAbout() {
        router.get("/about/authors").handler(StaticHandler.create(""));
        router.get("/about/page").handler(StaticHandler.create(""));
    }

    private void addLiabilities() {
        router.get("/contact/").handler(StaticHandler.create(""));
        router.get("/imprint/").handler(StaticHandler.create(""));
        router.get("/privacy/").handler(StaticHandler.create(""));
    }
}
