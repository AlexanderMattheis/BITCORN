package bitcorn.pages.handler;

import bitcorn.system.Codes;
import bitcorn.system.defaults.Symbols;
import io.vertx.core.eventbus.Message;
import io.vertx.core.json.JsonObject;
import org.jooq.*;
import org.jooq.impl.DSL;

import java.sql.Connection;
import java.sql.DriverManager;
import java.time.Instant;
import java.time.temporal.ChronoUnit;

import static bitcorn.pages.database.Tables.CONTACT;
import static bitcorn.system.database.Parameters.JdbcConfig.*;

public final class ContactDatabaseHandler implements ICrudBase {

    public void create(Message request) {
        final JsonObject data = (JsonObject) request.body();

        final String received = Instant.now()
                .truncatedTo(ChronoUnit.MILLIS).toString()
                .replace("T", Symbols.SPACE).replace("Z", Symbols.EMPTY);

        final String email = data.getString("email");
        final String message = data.getString("message");

        // hint: in a try-catch-statement the connection is closed automatically since Java 7
        try (Connection conn = DriverManager.getConnection(DATABASE_URL, USER_NAME, PASSWORD)) {
            DSLContext database = DSL.using(conn, SQLDialect.MYSQL);
            database.insertInto(CONTACT).values(received, email, message)
                    .execute();

            request.reply(Codes.CREATED.getValue());
            database.close();
        } catch (Exception e) {
            request.reply(Codes.INTERNAL_SERVER_ERROR.getValue());
            e.printStackTrace();
        }
    }
}
