package bitcorn.pages.verticles;

import bitcorn.pages.handler.GraphicsDatabaseHandler;
import bitcorn.system.database.Command;
import bitcorn.pages.handler.ContactDatabaseHandler;
import bitcorn.pages.handler.IDatabaseHandler;
import bitcorn.system.Actions;
import bitcorn.system.database.Commands;
import bitcorn.system.database.Contexts;
import bitcorn.system.defaults.Eventbuses;
import bitcorn.system.defaults.Messages;
import bitcorn.system.exceptions.NoContextException;
import bitcorn.system.extension.util.logging.LoggerExtension;
import bitcorn.system.types.CommandType;
import bitcorn.system.types.GraphicType;
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
        vertx.eventBus().consumer(Eventbuses.Verticles.DATABASE, this::accessDatabase);
    }

    private void accessDatabase(Message request) {
        final String action = request.headers().get(CommandType.ACTION.getName());
        final Command command = Commands.getParts(action);

        executeOperation(command, request);
    }

    private void executeOperation(Command command, Message request) {
        try {
            final IDatabaseHandler database = getContext(command);
            final String commandAction = command.getAction();

            // CRUD
            if (commandAction.equals(Actions.CREATE.name())) {  // create
                database.create(request);
            } else if (commandAction.equals(Actions.READ.name())) {
                database.read(request);
            }
        } catch (NoContextException e) {
            LOGGER.log(Level.SEVERE, Messages.Exceptions.NO_CONTEXT, e);
        }
    }

    private IDatabaseHandler getContext(Command command) throws NoContextException {
        final String commandContext = command.getContext();

        // the different bitcorn database tables
        if (commandContext.equals(Contexts.CONTACT.getContext())) {
            return new ContactDatabaseHandler();
        } else if (commandContext.equals(Contexts.TEXTURES.getContext())) {
            return new GraphicsDatabaseHandler(GraphicType.TEXTURE);
        } else if (commandContext.equals(Contexts.VECTOR_GRAPHICS.getContext())) {
            return new GraphicsDatabaseHandler(GraphicType.VECTOR_GRAPHIC);
        }

        throw new NoContextException(Messages.Exceptions.NO_CONTEXT);
    }

    @Override
    public void stop() {
        // NOP
    }
}
