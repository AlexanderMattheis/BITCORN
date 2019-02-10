package bitcorn.system;

public final class SqlQueries {
    public static final String CREATE_PAGE = "INSERT INTO pages VALUES (NULL, ?, ?)";
    public static final String CREATE_PAGES_TABLE = "CREATE TABLE IF NOT EXISTS pages" +
            "(id INTEGER IDENTITY PRIMARY KEY, name VARCHAR(255) UNIQUE, content CLOB)";
    public static final String DELETE_PAGE = "DELETE FROM pages WHERE id = ?";
    public static final String FETCH_ALL_PAGE_NAMES = "SELECT name FROM pages";
    public static final String FETCH_PAGE = "SELECT id, content FROM pages WHERE Name = ?";
    public static final String UPDATE_PAGE = "UPDATE pages SET content = ? WHERE id = ?";
}
