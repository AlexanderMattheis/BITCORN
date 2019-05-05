SET GLOBAL time_zone = '+1:00';  # UTC
SELECT * FROM contact;

CREATE TABLE contact (
	id INT AUTO_INCREMENT PRIMARY KEY,
	received DATETIME NOT NULL,
    email VARCHAR(254) NOT NULL,
    message VARCHAR(1000) NOT NULL
);

DROP TABLE contact;

INSERT INTO contact (received, email, message) 
VALUES('2019-03-25 07:15:46', 'alexander.mattheis@web.de', 'First message from the developer.');

DELETE FROM contact
WHERE id > 1;