package bitcorn.system.database;

public interface Parameters {
    interface JdbcConfig {
        String DATABASE_URL = "jdbc:mysql://localhost:3306/bitcorn?serverTimezone=UTC";
        String PASSWORD = "esirnus";
        String USER_NAME = "root";
    }
}
