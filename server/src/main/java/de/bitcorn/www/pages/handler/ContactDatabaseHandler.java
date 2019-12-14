package de.bitcorn.www.pages.handler;

import de.bitcorn.www.system.EventbusMessaging;
import de.bitcorn.www.system.Statuscode;
import de.bitcorn.www.system.defaults.Messages;
import de.bitcorn.www.system.extension.util.logging.LoggerExtension;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;
import org.jooq.*;
import org.jooq.impl.DSL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.Logger;

import static de.bitcorn.www.pages.database.Tables.CONTACT;
import static de.bitcorn.www.system.database.Parameters.JdbcConfig.*;

public final class ContactDatabaseHandler implements IDatabaseHandler {

    private static final Logger LOGGER = Logger.getLogger(ContactDatabaseHandler.class.getName());

    public void create(Message request) {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "create"));
        final JsonObject data = (JsonObject) request.body();

        final Timestamp received = new Timestamp(new Date().getTime());
        final String email = data.getString("email");
        final String message = data.getString("message");

        // TODO: Validate before adding into the database

        // hint: in a try-catch-statement the connection is closed automatically since Java 7
        try (final Connection conn = DriverManager.getConnection(DATABASE_URL, USER_NAME, PASSWORD)) {
            final DSLContext database = DSL.using(conn, SQLDialect.MYSQL);
            database.insertInto(CONTACT)
                    .columns(CONTACT.RECEIVED, CONTACT.EMAIL, CONTACT.MESSAGE)
                    .values(received, email, message)
                    .execute();
            database.close();

            EventbusMessaging.reply(request, null, Statuscode.CREATED);  // reply on eventbus
        } catch (Exception e) {
            LOGGER.info(Messages.Exceptions.NO_CONNECTION);
            LOGGER.severe(e.getMessage());

            EventbusMessaging.reply(request, null, Statuscode.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public void read(Message request) {
        throw new UnsupportedOperationException();
    }
}
