package de.bitcorn.www.system.defaults;

public interface Eventbuses {
    interface Verticles {
        // the queue to which the database-verticle listens to
        String DATABASE = "database_queue";  // arbitrary string/name
    }
}
