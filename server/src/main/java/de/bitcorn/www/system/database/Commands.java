package de.bitcorn.www.system.database;

import de.bitcorn.www.system.Actions;
import de.bitcorn.www.system.defaults.Regex;
import de.bitcorn.www.system.defaults.Symbols;

public interface Commands {
    static Command getParts(String command) {
        final String[] parts = command.split(Regex.COMMAND_SEPARATOR);
        return new Command(parts[0], parts[1]);
    }

    interface Contact {
        String CREATE = Contexts.CONTACT + Symbols.COMMAND_SEPARATOR + Actions.CREATE;
    }

    interface Graphics {
        interface TextureGraphics {
            String READ = Contexts.TEXTURES + Symbols.COMMAND_SEPARATOR + Actions.READ;
        }

        interface VectorGraphics {
            String READ = Contexts.VECTOR_GRAPHICS + Symbols.COMMAND_SEPARATOR + Actions.READ;
        }
    }
}
