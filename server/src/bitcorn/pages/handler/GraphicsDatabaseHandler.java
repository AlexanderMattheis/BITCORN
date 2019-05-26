package bitcorn.pages.handler;

import bitcorn.pages.container.listings.GraphicListing;
import bitcorn.pages.container.listings.TextureGraphicListing;
import bitcorn.pages.container.listings.VectorGraphicListing;
import bitcorn.pages.references.ElementReference;
import bitcorn.system.EventbusMessaging;
import bitcorn.system.Statuscode;
import bitcorn.system.defaults.Messages;
import bitcorn.system.extension.util.logging.LoggerExtension;
import bitcorn.system.types.GraphicType;
import io.vertx.core.eventbus.Message;
import org.jooq.DSLContext;
import org.jooq.SQLDialect;
import org.jooq.impl.DSL;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import static bitcorn.pages.database.Tables.TEXTURES;
import static bitcorn.pages.database.Tables.VECTOR_GRAPHICS;
import static bitcorn.system.database.Parameters.JdbcConfig.*;

public class GraphicsDatabaseHandler implements IDatabaseHandler {

    private static final Logger LOGGER = Logger.getLogger(GraphicsDatabaseHandler.class.getName());

    private final GraphicType graphicType;

    public GraphicsDatabaseHandler(GraphicType graphicType) {
        this.graphicType = graphicType;
    }

    @Override
    public void create(Message request) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void read(Message request) {
        LOGGER.info(LoggerExtension.returnMethodPath(LOGGER, "read"));

        // hint: in a try-catch-statement the connection is closed automatically since Java 7
        try (final Connection conn = DriverManager.getConnection(DATABASE_URL, USER_NAME, PASSWORD)) {
            final DSLContext database = DSL.using(conn, SQLDialect.MYSQL);
            final List<GraphicListing> graphicListings = getGraphicListings(database);
            database.close();

            EventbusMessaging.reply(request, graphicListings, Statuscode.OK);
        } catch (Exception e) {
            LOGGER.info(Messages.Exceptions.NO_CONNECTION);
            LOGGER.severe(e.getMessage());

            EventbusMessaging.reply(request, null, Statuscode.INTERNAL_SERVER_ERROR);
        }
    }

    private List<GraphicListing> getGraphicListings(DSLContext database) {
        final List<GraphicListing> graphicListings;

        if (graphicType.equals(GraphicType.TEXTURE)) {
            graphicListings = getTexturesListings(database);
        } else if (graphicType.equals(GraphicType.VECTOR_GRAPHIC)) {
            graphicListings = getVectorGraphicListings(database);
        } else {
            graphicListings = new ArrayList<>();
        }

        return graphicListings;
    }

    private List<GraphicListing> getTexturesListings(DSLContext database) {
        return database.select().from(TEXTURES).fetch(record -> {
            final String author = record.get(TEXTURES.AUTHOR);
            final Date date = record.get(TEXTURES.DATE);
            final String description = record.get(TEXTURES.DESCRIPTION);
            final String imagePath = record.get(TEXTURES.IMAGE_PATH);
            final String imageName = record.get(TEXTURES.IMAGE_NAME);
            final String licenceLink = record.get(TEXTURES.LICENCE_LINK);
            final String licenceName = record.get(TEXTURES.LICENCE_NAME);
            final String path = record.get(TEXTURES.PATH);
            final String elementName = record.get(TEXTURES.ELEMENT_NAME);
            final String tags = record.get(TEXTURES.TAGS);
            final String title = record.get(TEXTURES.TITLE);
            final String writing = record.get(TEXTURES.WRITING);

            final ElementReference imageReference = new ElementReference(imagePath, imageName);
            final ElementReference licenceReference = new ElementReference(licenceLink, licenceName);
            final ElementReference elementReference = new ElementReference(path, elementName);

            return new TextureGraphicListing(author, date, description, imageReference,
                    licenceReference, elementReference, tags, title, writing);
        });
    }

    private List<GraphicListing> getVectorGraphicListings(DSLContext database) {
        return database.select().from(VECTOR_GRAPHICS).fetch(record -> {
            final String author = record.get(VECTOR_GRAPHICS.AUTHOR);
            final Date date = record.get(VECTOR_GRAPHICS.DATE);
            final String description = record.get(VECTOR_GRAPHICS.DESCRIPTION);
            final String imagePath = record.get(VECTOR_GRAPHICS.IMAGE_PATH);
            final String imageName = record.get(VECTOR_GRAPHICS.IMAGE_NAME);
            final String licenceLink = record.get(VECTOR_GRAPHICS.LICENCE_LINK);
            final String licenceName = record.get(VECTOR_GRAPHICS.LICENCE_NAME);
            final String path = record.get(VECTOR_GRAPHICS.PATH);
            final String elementName = record.get(VECTOR_GRAPHICS.ELEMENT_NAME);
            final String tags = record.get(VECTOR_GRAPHICS.TAGS);
            final String title = record.get(VECTOR_GRAPHICS.TITLE);

            final ElementReference imageReference = new ElementReference(imagePath, imageName);
            final ElementReference licenceReference = new ElementReference(licenceLink, licenceName);
            final ElementReference elementReference = new ElementReference(path, elementName);

            return new VectorGraphicListing(author, date, description, imageReference,
                    licenceReference, elementReference, tags, title);
        });
    }
}
