package bitcorn.verticles;

import bitcorn.system.Commands;
import bitcorn.system.Messages;
import bitcorn.system.Parameters;
import bitcorn.system.Paths;
import bitcorn.verticles.data.Thing;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.Json;

import java.util.LinkedHashMap;
import java.util.Map;

public class DatabaseVerticle extends AbstractVerticle {
    private Map<Integer, Thing> things;

    public DatabaseVerticle() { things = new LinkedHashMap<>(); }

    @Override
    public void start() throws Exception {
        fillWithData();

        vertx.eventBus().consumer(Paths.Eventbus.Addresses.DATABASE_QUEUE, message -> {
            String command = message.headers().get(Parameters.Delivery.COMMAND);

            switch (command) {
                case Commands.ADD_ONE: addOne(message);
                break;
                case Commands.DELETE_ONE: deleteOne(message);
                break;
                case Commands.FETCH_ALL: fetchAll(message);
                break;
                default: System.err.println(Messages.Errors.COMMAND_NOT_EXISTENT);
            }
        });

        System.out.println("Database started!");
    }

    private void fillWithData() {
        Thing thing1 = new Thing("mp3-player", "America");
        things.put(thing1.getId(), thing1);

        Thing thing2 = new Thing("watch", "China");
        things.put(thing2.getId(), thing2);
    }

    private void addOne(Message<Object> message) {
        String buffer = (String) message.body();

        // Converts JSON into a "POJO = Plain Old Java Object".
        // input: Buffer buffer, Class<T> clazz
        // buffer: {name: name, origin: origin}
        // class Thing has constructor (String name, String origin)
        Thing thing = Json.decodeValue(buffer, Thing.class);

        // adds it to the products
        things.put(thing.getId(), thing);

        // reply with the object
        message.reply(thing.getId());
    }

    private void deleteOne(Message<Object> message) {
        String id = (String) message.body();

        if (id == null) {
            message.reply(400);  // Bad Request: the request of the client was not correct
        } else {
            Integer idAsInteger = Integer.valueOf(id);  // else converting into integer
            things.remove(idAsInteger);  // and removing the product with the given "id" from
        }

        // No Content: the request was successful, intentionally it does not contain any content
        message.reply(204);
    }

    private void fetchAll(Message<Object> message) {
        message.reply(Json.encodePrettily(things.values()));
    }
}
