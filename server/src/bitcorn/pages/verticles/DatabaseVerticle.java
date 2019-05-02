package bitcorn.pages.verticles;

import bitcorn.logic.database.Command;
import bitcorn.pages.handler.ContactDatabaseHandler;
import bitcorn.pages.handler.ICrudBase;
import bitcorn.system.Actions;
import bitcorn.system.database.Commands;
import bitcorn.system.database.Contexts;
import bitcorn.system.defaults.Eventbuses;
import bitcorn.system.defaults.Messages;
import bitcorn.system.exceptions.DatabaseException;
import bitcorn.system.exceptions.NoContextException;
import bitcorn.system.extension.util.logging.LoggerExtension;
import io.vertx.core.AbstractVerticle;
import io.vertx.core.eventbus.Message;

import java.util.logging.Level;
import java.util.logging.Logger;

public final class DatabaseVerticle extends AbstractVerticle {

    private static final Logger LOGGER = Logger.getLogger(DatabaseVerticle.class.getName());

    @Override
    public void start() {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "start"));
        processEventbusData();
    }

    private void processEventbusData() {
        vertx.eventBus().consumer(Eventbuses.Verticles.DATABASE, request -> {
            try {
                accessDatabase(request);
            } catch (DatabaseException e) {
                LOGGER.log(Level.SEVERE, Messages.Exceptions.NO_CONNECTION, e);
            }
        });
    }

    private void accessDatabase(Message request) throws DatabaseException {
        final String action = request.headers().get(Commands.ACTION);
        final Command command = Commands.getParts(action);

        executeOperation(command, request);
    }

    private void executeOperation(Command command, Message request) throws DatabaseException {
        final ICrudBase database = getContext(command);

        // CRUD
        if (command.getAction().equals(Actions.CREATE.name())) {  // create
            database.create(request);
        }
    }

    private ICrudBase getContext(Command command) throws NoContextException {
        // the different bitcorn database tables
        if (command.getContext().equals(Contexts.CONTACT.getContext())) {
            return new ContactDatabaseHandler();
        }

        throw new NoContextException(Messages.Exceptions.NO_CONTEXT);
    }

    @Override
    public void stop() {
        // NOP
    }
}
