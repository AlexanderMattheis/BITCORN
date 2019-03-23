package bitcorn.pages.routes;

import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public class Pages extends ARoutes {

    private Router router;

    public Pages(Router router) {
        super(router);
    }

    public void add() {
        addBase(router);
        addDownloads(router);
        addTutorials(router);
        addAbout(router);

        addLiabilities(router);
    }

    private void addBase(Router router) {
        // links everything in the root "/" to everything
        // in the resources-folder "" (not recursively)
        router.get("/*").handler(StaticHandler.create(""));
        router.get("/home").handler(StaticHandler.create(""));
    }

    private void addDownloads(Router router) {
        // downloads/graphics
        router.get("/downloads/graphics").handler(StaticHandler.create(""));

        // downloads/programs
        router.get("/downloads/programs").handler(StaticHandler.create(""));

        router.get("/downloads/programs/bioinformatics").handler(StaticHandler.create(""));
        router.get("/downloads/programs/cross-dating").handler(StaticHandler.create(""));
        router.get("/downloads/programs/res").handler(StaticHandler.create(""));
    }

    private void addTutorials(Router router) {
        // NOP
    }

    private void addAbout(Router router) {
        router.get("/about/authors").handler(StaticHandler.create(""));
        router.get("/about/page").handler(StaticHandler.create(""));
    }

    private void addLiabilities(Router router) {
        router.get("/contact/").handler(StaticHandler.create(""));
        router.get("/imprint/").handler(StaticHandler.create(""));
        router.get("/privacy/").handler(StaticHandler.create(""));
    }
}
