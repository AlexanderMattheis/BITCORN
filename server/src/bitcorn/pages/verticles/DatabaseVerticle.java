package bitcorn.pages.verticles;

import bitcorn.system.Codes;
import bitcorn.system.defaults.Eventbuses;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.json.JsonObject;

import java.util.logging.Logger;

public class DatabaseVerticle extends AbstractVerticle {

    private static final Logger logger = Logger.getLogger(DatabaseVerticle.class.getName());

    @Override
    public void start() throws Exception  {
        logger.info(logger.getName());
        processEventbusData();
    }

    private void processEventbusData() {
        vertx.eventBus().consumer(Eventbuses.Verticles.DATABASE, request -> {
            JsonObject data = (JsonObject) request.body();

            String email = data.getString("email");
            String message = data.getString("message");

            request.reply(Codes.CREATED.getValue());
        });
    }


    @Override
    public void stop() throws Exception {
        // NOP
    }
}
