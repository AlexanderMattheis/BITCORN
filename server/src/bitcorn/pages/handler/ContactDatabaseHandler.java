package bitcorn.pages.handler;

import bitcorn.system.StatusCodes;
import bitcorn.system.defaults.Messages;
import bitcorn.system.extension.util.logging.LoggerExtension;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;
import org.jooq.*;
import org.jooq.impl.DSL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.Logger;

import static bitcorn.pages.database.Tables.CONTACT;
import static bitcorn.system.database.Parameters.JdbcConfig.*;

public final class ContactDatabaseHandler implements ICrudBase {

    private static final Logger LOGGER = Logger.getLogger(ContactDatabaseHandler.class.getName());

    public void create(Message request) {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "create"));
        final JsonObject data = (JsonObject) request.body();

        final Timestamp received = new Timestamp(new Date().getTime());
        final String email = data.getString("email");
        final String message = data.getString("message");

        // hint: in a try-catch-statement the connection is closed automatically since Java 7
        try (final Connection conn = DriverManager.getConnection(DATABASE_URL, USER_NAME, PASSWORD)) {
            final DSLContext database = DSL.using(conn, SQLDialect.MYSQL);
            database.insertInto(CONTACT)
                    .columns(CONTACT.RECEIVED, CONTACT.EMAIL, CONTACT.MESSAGE)
                    .values(received, email, message)
                    .execute();

            request.reply(StatusCodes.CREATED.getValue());
            database.close();
        } catch (Exception e) {
            request.reply(StatusCodes.INTERNAL_SERVER_ERROR.getValue());
            LOGGER.info(Messages.Exceptions.NO_CONNECTION);
            LOGGER.severe(e.getMessage());
        }
    }
}
