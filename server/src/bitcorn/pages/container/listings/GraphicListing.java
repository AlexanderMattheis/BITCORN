package bitcorn.pages.container.listings;

import bitcorn.pages.references.ElementReference;
import org.hibernate.validator.constraints.URL;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;

public class GraphicListing {

    @NotNull
    @Size(max = 50)
    private String author;

    @NotNull
    private Date date;

    @NotNull
    @Size(max = 100)
    private String description;

    @NotNull
    @Size(max = 120)
    private String imagePath;

    @NotNull
    @Size(max = 50)
    private String imageName;

    @NotNull
    @Size(max = 120)
    @URL
    private String licenceLink;

    @NotNull
    @Size(max = 50)
    private String licenceName;

    @NotNull
    @Size(max = 100)
    private String path;

    @NotNull
    @Size(max = 50)
    private String elementName;

    @NotNull
    @Size(max = 200)
    private String tags;

    @NotNull
    @Size(max = 50)
    private String title;

    private GraphicListing() {
        // NOP: needed for deserialization
    }

    public GraphicListing(String author, Date date, String description, ElementReference image,
                          ElementReference licence, ElementReference element, String tags, String title) {
        this.author = author;
        this.date = date;
        this.description = description;
        this.imagePath = image.getPath();
        this.imageName = image.getName();
        this.licenceLink = licence.getPath();
        this.licenceName = licence.getName();
        this.path = element.getPath();
        this.elementName = element.getName();
        this.tags = tags;
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public Date getDate() {
        return date;
    }

    public String getDescription() {
        return description;
    }

    public String getImagePath() {
        return imagePath;
    }

    public String getImageName() {
        return imageName;
    }

    public String getLicenceLink() {
        return licenceLink;
    }

    public String getLicenceName() {
        return licenceName;
    }

    public String getPath() {
        return path;
    }

    public String getElementName() {
        return elementName;
    }

    public String getTags() {
        return tags;
    }

    public String getTitle() {
        return title;
    }
}
