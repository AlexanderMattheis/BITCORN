package bitcorn.system.extension.util.logging;

import bitcorn.system.defaults.Symbols;

import java.util.logging.Logger;

public class LoggerExtension {
    public static String returnMethodPath(Logger logger, String methodName) {
        return logger.getName() + Symbols.SPACE + methodName;
    }
}
