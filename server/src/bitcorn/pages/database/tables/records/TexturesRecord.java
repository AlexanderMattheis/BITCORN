/*
 * This file is generated by jOOQ.
 */
package bitcorn.pages.database.tables.records;


import bitcorn.pages.database.tables.Textures;

import java.sql.Date;

import javax.annotation.Generated;

import org.jooq.Field;
import org.jooq.Record1;
import org.jooq.Record13;
import org.jooq.Row13;
import org.jooq.impl.UpdatableRecordImpl;


/**
 * This class is generated by jOOQ.
 */
@Generated(
    value = {
        "http://www.jooq.org",
        "jOOQ version:3.11.9"
    },
    comments = "This class is generated by jOOQ"
)
@SuppressWarnings({ "all", "unchecked", "rawtypes" })
public class TexturesRecord extends UpdatableRecordImpl<TexturesRecord> implements Record13<Integer, String, Date, String, String, String, String, String, String, String, String, String, String> {

    private static final long serialVersionUID = -191128640;

    /**
     * Setter for <code>bitcorn.textures.id</code>.
     */
    public void setId(Integer value) {
        set(0, value);
    }

    /**
     * Getter for <code>bitcorn.textures.id</code>.
     */
    public Integer getId() {
        return (Integer) get(0);
    }

    /**
     * Setter for <code>bitcorn.textures.author</code>.
     */
    public void setAuthor(String value) {
        set(1, value);
    }

    /**
     * Getter for <code>bitcorn.textures.author</code>.
     */
    public String getAuthor() {
        return (String) get(1);
    }

    /**
     * Setter for <code>bitcorn.textures.date</code>.
     */
    public void setDate(Date value) {
        set(2, value);
    }

    /**
     * Getter for <code>bitcorn.textures.date</code>.
     */
    public Date getDate() {
        return (Date) get(2);
    }

    /**
     * Setter for <code>bitcorn.textures.description</code>.
     */
    public void setDescription(String value) {
        set(3, value);
    }

    /**
     * Getter for <code>bitcorn.textures.description</code>.
     */
    public String getDescription() {
        return (String) get(3);
    }

    /**
     * Setter for <code>bitcorn.textures.image_path</code>.
     */
    public void setImagePath(String value) {
        set(4, value);
    }

    /**
     * Getter for <code>bitcorn.textures.image_path</code>.
     */
    public String getImagePath() {
        return (String) get(4);
    }

    /**
     * Setter for <code>bitcorn.textures.image_name</code>.
     */
    public void setImageName(String value) {
        set(5, value);
    }

    /**
     * Getter for <code>bitcorn.textures.image_name</code>.
     */
    public String getImageName() {
        return (String) get(5);
    }

    /**
     * Setter for <code>bitcorn.textures.licence_link</code>.
     */
    public void setLicenceLink(String value) {
        set(6, value);
    }

    /**
     * Getter for <code>bitcorn.textures.licence_link</code>.
     */
    public String getLicenceLink() {
        return (String) get(6);
    }

    /**
     * Setter for <code>bitcorn.textures.licence_name</code>.
     */
    public void setLicenceName(String value) {
        set(7, value);
    }

    /**
     * Getter for <code>bitcorn.textures.licence_name</code>.
     */
    public String getLicenceName() {
        return (String) get(7);
    }

    /**
     * Setter for <code>bitcorn.textures.path</code>.
     */
    public void setPath(String value) {
        set(8, value);
    }

    /**
     * Getter for <code>bitcorn.textures.path</code>.
     */
    public String getPath() {
        return (String) get(8);
    }

    /**
     * Setter for <code>bitcorn.textures.element_name</code>.
     */
    public void setElementName(String value) {
        set(9, value);
    }

    /**
     * Getter for <code>bitcorn.textures.element_name</code>.
     */
    public String getElementName() {
        return (String) get(9);
    }

    /**
     * Setter for <code>bitcorn.textures.tags</code>.
     */
    public void setTags(String value) {
        set(10, value);
    }

    /**
     * Getter for <code>bitcorn.textures.tags</code>.
     */
    public String getTags() {
        return (String) get(10);
    }

    /**
     * Setter for <code>bitcorn.textures.title</code>.
     */
    public void setTitle(String value) {
        set(11, value);
    }

    /**
     * Getter for <code>bitcorn.textures.title</code>.
     */
    public String getTitle() {
        return (String) get(11);
    }

    /**
     * Setter for <code>bitcorn.textures.writing</code>.
     */
    public void setWriting(String value) {
        set(12, value);
    }

    /**
     * Getter for <code>bitcorn.textures.writing</code>.
     */
    public String getWriting() {
        return (String) get(12);
    }

    // -------------------------------------------------------------------------
    // Primary key information
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Record1<Integer> key() {
        return (Record1) super.key();
    }

    // -------------------------------------------------------------------------
    // Record13 type implementation
    // -------------------------------------------------------------------------

    /**
     * {@inheritDoc}
     */
    @Override
    public Row13<Integer, String, Date, String, String, String, String, String, String, String, String, String, String> fieldsRow() {
        return (Row13) super.fieldsRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Row13<Integer, String, Date, String, String, String, String, String, String, String, String, String, String> valuesRow() {
        return (Row13) super.valuesRow();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Integer> field1() {
        return Textures.TEXTURES.ID;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field2() {
        return Textures.TEXTURES.AUTHOR;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<Date> field3() {
        return Textures.TEXTURES.DATE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field4() {
        return Textures.TEXTURES.DESCRIPTION;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field5() {
        return Textures.TEXTURES.IMAGE_PATH;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field6() {
        return Textures.TEXTURES.IMAGE_NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field7() {
        return Textures.TEXTURES.LICENCE_LINK;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field8() {
        return Textures.TEXTURES.LICENCE_NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field9() {
        return Textures.TEXTURES.PATH;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field10() {
        return Textures.TEXTURES.ELEMENT_NAME;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field11() {
        return Textures.TEXTURES.TAGS;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field12() {
        return Textures.TEXTURES.TITLE;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Field<String> field13() {
        return Textures.TEXTURES.WRITING;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer component1() {
        return getId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component2() {
        return getAuthor();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Date component3() {
        return getDate();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component4() {
        return getDescription();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component5() {
        return getImagePath();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component6() {
        return getImageName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component7() {
        return getLicenceLink();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component8() {
        return getLicenceName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component9() {
        return getPath();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component10() {
        return getElementName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component11() {
        return getTags();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component12() {
        return getTitle();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String component13() {
        return getWriting();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Integer value1() {
        return getId();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value2() {
        return getAuthor();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Date value3() {
        return getDate();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value4() {
        return getDescription();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value5() {
        return getImagePath();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value6() {
        return getImageName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value7() {
        return getLicenceLink();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value8() {
        return getLicenceName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value9() {
        return getPath();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value10() {
        return getElementName();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value11() {
        return getTags();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value12() {
        return getTitle();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String value13() {
        return getWriting();
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value1(Integer value) {
        setId(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value2(String value) {
        setAuthor(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value3(Date value) {
        setDate(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value4(String value) {
        setDescription(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value5(String value) {
        setImagePath(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value6(String value) {
        setImageName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value7(String value) {
        setLicenceLink(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value8(String value) {
        setLicenceName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value9(String value) {
        setPath(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value10(String value) {
        setElementName(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value11(String value) {
        setTags(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value12(String value) {
        setTitle(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord value13(String value) {
        setWriting(value);
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public TexturesRecord values(Integer value1, String value2, Date value3, String value4, String value5, String value6, String value7, String value8, String value9, String value10, String value11, String value12, String value13) {
        value1(value1);
        value2(value2);
        value3(value3);
        value4(value4);
        value5(value5);
        value6(value6);
        value7(value7);
        value8(value8);
        value9(value9);
        value10(value10);
        value11(value11);
        value12(value12);
        value13(value13);
        return this;
    }

    // -------------------------------------------------------------------------
    // Constructors
    // -------------------------------------------------------------------------

    /**
     * Create a detached TexturesRecord
     */
    public TexturesRecord() {
        super(Textures.TEXTURES);
    }

    /**
     * Create a detached, initialised TexturesRecord
     */
    public TexturesRecord(Integer id, String author, Date date, String description, String imagePath, String imageName, String licenceLink, String licenceName, String path, String elementName, String tags, String title, String writing) {
        super(Textures.TEXTURES);

        set(0, id);
        set(1, author);
        set(2, date);
        set(3, description);
        set(4, imagePath);
        set(5, imageName);
        set(6, licenceLink);
        set(7, licenceName);
        set(8, path);
        set(9, elementName);
        set(10, tags);
        set(11, title);
        set(12, writing);
    }
}