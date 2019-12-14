package de.bitcorn.www.pages.container.listings;

import de.bitcorn.www.pages.references.ElementReference;

import java.util.Date;

public final class VectorGraphicListing extends GraphicListing {

    public VectorGraphicListing(String author, Date date, String description,
                                ElementReference image, ElementReference licence,
                                ElementReference element, String tags, String title) {
        super(author, date, description, image, licence, element, tags, title);
    }
}
