package bitcorn.pages.handler;

import bitcorn.system.Codes;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;

public final class ContactDatabase implements ICrudBase {

    public void create(Message request) {
        JsonObject data = (JsonObject) request.body();

        String email = data.getString("email");
        String message = data.getString("message");

        request.reply(Codes.CREATED.getValue());
    }
}
