package bitcorn.system;

public final class Parameters {
    public final class JdbcConfig {
        // JDBC dependant stuff, which is necessary to create the SQL-client
        public static final String CONFIG_JDBC_DRIVER_CLASS = "bitcorn.jdbc.driver_class";  // pointing to driver
        public static final String CONFIG_JDBC_MAX_POOL_SIZE = "bitcorn.jdbc.max_pool_size";
        public static final String CONFIG_JDBC_URL = "bitcorn.jdbc.url";
    }
}
