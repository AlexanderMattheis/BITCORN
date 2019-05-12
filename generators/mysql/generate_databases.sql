SET GLOBAL time_zone = '+1:00';  # UTC

/* CONTACT */
SELECT * FROM contact;

CREATE TABLE contact (
	id INT AUTO_INCREMENT PRIMARY KEY,
	received DATETIME NOT NULL,
    email VARCHAR(254) CHARACTER SET UTF8MB4 NOT NULL,
    message VARCHAR(1000) CHARACTER SET UTF8MB4 NOT NULL
);

DROP TABLE contact;

INSERT INTO contact (received, email, message) 
VALUES('2019-03-25 07:15:46', 'alexander.mattheis@web.de', 'First message from the developer.');

DELETE FROM contact
WHERE id > 1;

/* TEXTURES */
SELECT * FROM textures;

CREATE TABLE textures (
	id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    `date` DATE NOT NULL,
    description VARCHAR(100) CHARACTER SET UTF8MB4 NOT NULL,
    image_path VARCHAR(120) CHARACTER SET UTF8MB4 NOT NULL,
    image_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    licence_link VARCHAR(120) CHARACTER SET UTF8MB4 NOT NULL,
    licence_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    path VARCHAR(100) CHARACTER SET UTF8MB4 NOT NULL,
    element_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    tags VARCHAR(200) CHARACTER SET UTF8MB4 NOT NULL,
    title VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    writing VARCHAR(1000) CHARACTER SET UTF8MB4 NOT NULL
);

DROP TABLE textures;

INSERT INTO textures VALUES
(1,'Alexander Mattheis','2018-11-13','Coppers? No, dude! Planets are the new currency!','/assets/images/textures/','planets.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/textures/','planets.zip','planets,space,universe','Planets','Some planets I''ve created with <a href="https://www.gimp.org/" target="_blank" rel="noopener">GIMP</a> eight years ago for a friend''s Trackmania fan page. Maybe you want them? Because the website has never officially been launched and I have no use for that files.'),
(2,'Alexander Mattheis','2018-11-13','38 textures created/taken for Blender.','/assets/images/textures/','surfaces.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/textures/','surfaces.zip','grounds,surfaces,walls','Surfaces','Once I have also worked a lot with <a href="https://www.blender.org/" target="_blank" rel="noopener">Blender</a>, before the GUI has been changed to that dark theme, so before version 2.5 has been released. And in that time after my high school graduation (Abitur), I made that pictures, you see here and about 24 tutorials (which I have removed again due to the fact they were not professional enough). Hopefully, somebody finds some use in them.'),
(3,'Alexander Mattheis','2018-11-13','Abstract textures like color-splashes.','/assets/images/textures/','synthetics.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/textures/','synthetics.zip','artificial,synthetics,splash','Synthetics','Some synthetics I''ve created by playing around with <a href="https://www.gimp.org/" target="_blank" rel="noopener">GIMP</a>. Colorize them and you will see how great that textures will look like, especially the blurred one. Maybe I will use that texture in one of my tutorials, then I can better convince you.');