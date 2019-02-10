package bitcorn.verticles;

import bitcorn.system.*;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.jdbc.JDBCClient;
import io.vertx.ext.sql.SQLClient;

public class DatabaseVerticle extends AbstractVerticle {

    private SQLClient sqlClient;

    @Override
    public void start() throws Exception {
        sqlClient = createClient();
        handleCruds();

        System.out.println("Database started!");
    }

    private SQLClient createClient() {
        JsonObject config = new JsonObject()
                .put("driver_class", Parameters.JdbcConfig.CONFIG_JDBC_DRIVER_CLASS)
                .put("max_pool_size", Parameters.JdbcConfig.CONFIG_JDBC_MAX_POOL_SIZE)
                .put("url", Parameters.JdbcConfig.CONFIG_JDBC_URL);

        return JDBCClient.createShared(vertx, config);
    }

    private void handleCruds() {
        vertx.eventBus().consumer(Paths.Eventbus.Addresses.Verticles.DATABASE, message -> {
            String command = message.headers().get(Parameters.Delivery.COMMAND);

            switch (command) {
                case Commands.CREATE_PAGE: createPage(message);
                    break;
                case Commands.CREATE_PAGES_TABLE: createTable(message);
                    break;
                case Commands.DELETE_PAGE: deletePage(message);
                    break;
                case Commands.FETCH_ALL_PAGE_NAMES: fetchAllPageNames(message);
                    break;
                case Commands.FETCH_PAGE: fetchPage(message);
                    break;
                case Commands.UPDATE_PAGE: updatePage(message);
                    break;
                default: System.err.println(Messages.Errors.COMMAND_NOT_EXISTENT);
            }
        });
    }

    private void createPage(Message<Object> message) {
        JsonObject request = (JsonObject) message.body();

        JsonArray data = new JsonArray()
                .add(request.getString("title"))
                .add(request.getString("markdown"));

        sqlClient.updateWithParams(SqlQueries.CREATE_PAGE, data, task -> {
            if (task.succeeded()) {
                message.reply(Codes.CREATED.ordinal());
            } else {
                message.fail(Codes.INTERNAL_SERVER_ERROR.ordinal(), task.cause().getMessage());
            }
        });
    }

    private void createTable(Message<Object> message) {
        sqlClient.query(SqlQueries.CREATE_PAGES_TABLE, task -> {
            if (task.succeeded()) {
                message.reply(Codes.CREATED.ordinal());
            } else {
                message.fail(Codes.INTERNAL_SERVER_ERROR.ordinal(), task.cause().getMessage());
            }
        });
    }

    private void deletePage(Message<Object> message) {
//        JsonObject request = (JsonObject) message.body();
//
//        JsonArray data = new JsonArray()
//                .add(request.getString("id"));
//
//        sqlClient.updateWithParams(SqlQueries.DELETE_PAGE, data, task -> {
//            if (task.succeeded()) {
//                message.reply("");
//            } else {
//            }
//        });
//
//
//        if (id == null) {
//            message.reply(400);  // Bad Request: the request of the client was not correct
//        } else {
//            Integer idAsInteger = Integer.valueOf(id);  // else converting into integer
//            // and removing the product with the given "id" from
//        }
//
//        // No Content: the request was successful, intentionally it does not contain any content
//        message.reply(204);
    }

    private void fetchAllPageNames(Message<Object> message) {
        //message.reply(Json.encodePrettily(things.values()));
    }

    private void fetchPage(Message<Object> message) {
    }

    private void updatePage(Message<Object> message) {
    }

    @Override
    public void stop() throws Exception{
        sqlClient.close();
    }
}
