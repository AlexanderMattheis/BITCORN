SELECT * FROM contact;

CREATE TABLE contact (
	received DATETIME(6) PRIMARY KEY,
    email VARCHAR(254) NOT NULL,
    message VARCHAR(1000) NOT NULL
);

DROP TABLE contact;