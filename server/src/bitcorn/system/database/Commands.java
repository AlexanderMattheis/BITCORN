package bitcorn.system.database;


import bitcorn.logic.database.Command;
import bitcorn.system.Actions;
import bitcorn.system.defaults.Regex;
import bitcorn.system.defaults.Symbols;

public final class Commands {
    public static final String ACTION = "action";

    public static Command getParts(String command) {
        final String[] parts = command.split(Regex.COMMAND_SEPARATOR);
        return new Command(parts[0], parts[1]);
    }

    public static final class Contact {
        public static final String CREATE = Contexts.CONTACT + Symbols.COMMAND_SEPARATOR + Actions.CREATE;
    }
}
