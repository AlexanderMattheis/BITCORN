package de.bitcorn.www.pages.container.listings;

import de.bitcorn.www.pages.references.ElementReference;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

public final class TextureGraphicListing extends GraphicListing {

    @NotNull
    @Size(max = 1000)
    private String writing;

    public TextureGraphicListing(String author, Date date, String description, ElementReference image,
                                 ElementReference licence, ElementReference element, String tags, String title,
                                 String writing) {
        super(author, date, description, image, licence, element, tags, title);
        this.writing = writing;
    }
}
