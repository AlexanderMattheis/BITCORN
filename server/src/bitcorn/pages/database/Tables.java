/*
 * This file is generated by jOOQ.
 */
package bitcorn.pages.database;


import bitcorn.pages.database.tables.Contact;
import bitcorn.pages.database.tables.Textures;

import javax.annotation.Generated;


/**
 * Convenience access to all tables in bitcorn
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class Tables {

    /**
     * The table <code>bitcorn.contact</code>.
     */
    public static final Contact CONTACT = bitcorn.pages.database.tables.Contact.CONTACT;

    /**
     * The table <code>bitcorn.textures</code>.
     */
    public static final Textures TEXTURES = bitcorn.pages.database.tables.Textures.TEXTURES;
}
