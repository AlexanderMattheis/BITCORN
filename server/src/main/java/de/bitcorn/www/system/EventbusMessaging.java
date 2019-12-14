package de.bitcorn.www.system;

import de.bitcorn.www.system.defaults.Keywords;
import io.vertx.core.eventbus.DeliveryOptions;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.Json;

public final class EventbusMessaging {
    public static void reply(Message request, Object object, Statuscode httpStatusCode) {
        final DeliveryOptions options = new DeliveryOptions();
        final String statusCode = String.valueOf(httpStatusCode.getValue());
        options.addHeader(Keywords.HTTP_STATUS_CODE, statusCode);
        request.reply(Json.encode(object), options);
    }
}
