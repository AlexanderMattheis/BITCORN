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

/* VECTOR GRAPHICS */
SELECT * FROM vector_graphics;

CREATE TABLE vector_graphics (
	id INT AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    `date` DATE NOT NULL,
    description VARCHAR(100) CHARACTER SET UTF8MB4 NOT NULL,
    image_path VARCHAR(120) CHARACTER SET UTF8MB4 NOT NULL,
	image_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    licence_link VARCHAR(120) CHARACTER SET UTF8MB4 NOT NULL,
	licence_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    path VARCHAR(120) CHARACTER SET UTF8MB4 NOT NULL,
	element_name VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL,
    tags VARCHAR(200) CHARACTER SET UTF8MB4 NOT NULL,
    title VARCHAR(50) CHARACTER SET UTF8MB4 NOT NULL
);

DROP TABLE vector_graphics;

INSERT INTO vector_graphics VALUES
(1,'Alexander Mattheis','2018-11-10','Age of ...? Ah, the Age of Communities!','/assets/images/vector_graphics/','community.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','community.svg','community,group','Community'),
(2,'Alexander Mattheis','2018-11-10','Can you decode this piece of Deoxyribonucleic Acid?','/assets/images/vector_graphics/','dna.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','dna.svg','acid, deoxyribonucleic, dna','DNA'),
(3,'Alexander Mattheis','2018-11-10','You have mail, sir! .. Haha, it is empty!','/assets/images/vector_graphics/','envelope_empty.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','envelope_empty.svg','envelope,mail,office','Envelope (empty)'),
(4,'Alexander Mattheis','2018-11-10','A folder full of secret documents. Snowden?','/assets/images/vector_graphics/','folder.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','folder.svg','documents,folder','Folder'),
(5,'Alexander Mattheis','2018-11-10','Don''t look back! Leave the past behind.','/assets/images/vector_graphics/','garbage_can.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','garbage_can.svg','bin,can,garbage,rubbish','Garbage Can (empty)'),
(6,'Alexander Mattheis','2018-11-10','Have you found Scrooge''s thaler? Never possible!','/assets/images/vector_graphics/','golden_coin.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','golden_coin.svg','coin,golden,money,thaler','Golden Coin'),
(7,'Alexander Mattheis','2018-10-25','A small golden fish swimming around Antlantis.','/assets/images/vector_graphics/','golden_fish.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','golden_fish.svg','atlantis,fish,golden,tropical','Golden Fish'),
(8,'Alexander Mattheis','2018-11-10','That''s the hammer! That is awesome!','/assets/images/vector_graphics/','hammer.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','hammer.svg','hammer,red','Hammer'),
(9,'Alexander Mattheis','2018-11-10','Chéri, chéri .., oh you''re my heart!','/assets/images/vector_graphics/','heart.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','heart.svg','heart,love,romantic','Heart'),
(10,'Alexander Mattheis','2018-11-10','Click on the hyperlink to download me!','/assets/images/vector_graphics/','hyperlink.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','hyperlink.svg','globus,hyperlink,world','Hyperlink'),
(11,'Alexander Mattheis','2018-11-10','I hope justice comes to you, my friend!','/assets/images/vector_graphics/','libra.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','libra.svg','justice,libra,silver','Libra'),
(12,'Alexander Mattheis','2018-11-10','I have an idea! Let''s turn on the light.','/assets/images/vector_graphics/','light_bulb.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','light_bulb.svg','bulb,lampm','Light Bulb'),
(13,'Alexander Mattheis','2018-11-10','Scary, scary! An alien from the galaxy NGC 7742.','/assets/images/vector_graphics/','monster.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','monster.svg','alien,monster,slime','Monster'),
(14,'Alexander Mattheis','2018-11-10','Not light blue colors as usual. Violet looks good, no?','/assets/images/vector_graphics/','new_file.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','new_file.svg','data,file,new','New File'),
(15,'Alexander Mattheis','2018-11-12','Push the button! Then it becomes big.','/assets/images/vector_graphics/','next.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','next.svg','button,next,pop-up','Next'),
(16,'Alexander Mattheis','2018-11-12','You''re no offline! Please, revisit us again!','/assets/images/vector_graphics/','off.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','off.svg','button,display,offline','Off'),
(17,'Alexander Mattheis','2018-11-12','It''s OK! You did it well my big one.','/assets/images/vector_graphics/','ok.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','ok.svg','checkmark,confirmation,ok','OK'),
(18,'Alexander Mattheis','2018-11-12','You''re now online! You have access on all contents.','/assets/images/vector_graphics/','on.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','on.svg','button,display,online','On'),
(19,'Alexander Mattheis','2018-10-24','A wonderful palm tree from a tropical pirate island.','/assets/images/vector_graphics/','palm.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','palm.svg','palm,pirate,tropical','Palm'),
(20,'Alexander Mattheis','2018-11-12','What is paper?','/assets/images/vector_graphics/','paperclip.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','paperclip.svg','appendix,attachment,clamp','Paperclip'),
(21,'Alexander Mattheis','2018-11-20','Have you something to write?','/assets/images/vector_graphics/','pencil.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','pencil.svg','paperclip,pencil,writing','Pencil'),
(22,'Alexander Mattheis','2018-11-20','The sun is rising up? A new day begins.','/assets/images/vector_graphics/','picture.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','picture.svg','image,photo,picture','Picture'),
(23,'Alexander Mattheis','2018-11-20','A great tree, multiple times reusable for Christmas.','/assets/images/vector_graphics/','pine.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','pine.svg','fir tree,pine,spruce','Pine'),
(24,'Alexander Mattheis','2018-11-20','If you don''t recognize me, I''m a businessman!','/assets/images/vector_graphics/','profile.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','profile.svg','business,man,profile','Profile'),
(25,'Alexander Mattheis','2018-11-20','An idea, use it to break your character''s head.','/assets/images/vector_graphics/','question_block.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','question_block.svg','block,question','Question Block'),
(26,'Alexander Mattheis','2018-11-10','A green rating bar for good work in the community.','/assets/images/vector_graphics/','rating_bar_green.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','rating_bar_green.svg','bar,green,icon,rating','Rating Bar (green)'),
(27,'Alexander Mattheis','2018-11-10','Are you the forum-clown, my friend?','/assets/images/vector_graphics/','rating_bar_red.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','rating_bar_red.svg','bar,icon,rating,red','Rating Bar (red)'),
(28,'Alexander Mattheis','2018-11-20','I need your help. Please, save me!','/assets/images/vector_graphics/','save.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','save.svg','disk,floppy,save','Save'),
(29,'Alexander Mattheis','2018-11-20','Save me as your easter bunny!','/assets/images/vector_graphics/','save_as.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','save_as.svg','disk,floppy,save as','Save As'),
(30,'Alexander Mattheis','2018-11-20','Do you know me? I''m a Mercedes.','/assets/images/vector_graphics/','silberpfeil.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','silberpfeil.svg','automobile,race car,vehicle','Silberpfeil'),
(31,'Alexander Mattheis','2018-10-24','You want be a superstar and celebrate like Mario?','/assets/images/vector_graphics/','superstar.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','superstar.svg','celebration,superstar','Superstar'),
(32,'Alexander Mattheis','2018-11-20','What happens if you toggle the switch?','/assets/images/vector_graphics/','switch_block.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','switch_block.svg','exclamation mark,switch','Switch Block'),
(33,'Alexander Mattheis','2018-11-20','I warn you to leave this page!','/assets/images/vector_graphics/','warning.png','https://creativecommons.org/publicdomain/zero/1.0/deed','CC0 1.0 Universal','/assets/downloads/vector_graphics/','warning.svg','exclamation mark,warning','Warning!');

