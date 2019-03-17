package bitcorn.verticles;

import io.vertx.core.AbstractVerticle;
import java.util.logging.Logger;

public class DatabaseVerticle extends AbstractVerticle {

    private static final Logger LOGGER = Logger.getLogger(DatabaseVerticle.class.getName());

    @Override
    public void start() throws Exception  {
        LOGGER.info(LOGGER.getName());
    }


    @Override
    public void stop() throws Exception {
        // NOP
    }
}
