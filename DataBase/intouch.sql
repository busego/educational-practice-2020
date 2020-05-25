DROP DATABASE InTouch;
CREATE DATABASE InTouch;
USE InTouch;



-- Table USER
CREATE TABLE IF NOT EXISTS USER_(
USER_ID INT NOT NULL AUTO_INCREMENT,
NAME_USER VARCHAR(100) NOT NULL,
PRIMARY KEY(USER_ID)
);


-- Table LIKES
CREATE TABLE IF NOT EXISTS LIKES(
LIKE_ID INT NOT NULL AUTO_INCREMENT,
NAME_LIKED VARCHAR(50) NOT NULL,
PRIMARY KEY(LIKE_ID)
);


-- Table HASHTAGS
CREATE TABLE IF NOT EXISTS HASHTAGS(
HASHTAG_ID INT NOT NULL AUTO_INCREMENT,
NAME_TAGD VARCHAR(50) NOT NULL,
PRIMARY KEY(HASHTAG_ID)
);



-- Table POST
CREATE TABLE IF NOT EXISTS POST(
POST_ID INT NOT NULL AUTO_INCREMENT,
USER_ID INT NOT NULL,
DESCR VARCHAR(200) NOT NULL,
CREATED_AT DATETIME NOT NULL,
PHOTO_LINK VARCHAR(200) DEFAULT NULL,
LIKE_ID INT DEFAULT NULL,
HASHTAG_ID INT NOT NULL,
PRIMARY KEY (POST_ID),
FOREIGN KEY (USER_ID) REFERENCES USER_ (USER_ID),
FOREIGN KEY (LIKE_ID) REFERENCES LIKES (LIKE_ID),
FOREIGN KEY (HASHTAG_ID) REFERENCES HASHTAGS (HASHTAG_ID)
);






-- Fill
INSERT INTO USER_ (USER_ID, NAME_USER) VALUES
(1, 'bot1'),(2, 'bot2'),(3, 'bot3'),(4, 'bot4'),(5, 'bot5'),
(6, 'bot6'),(7, 'bot7'),(8, 'bot8'),(9, 'bot9'),(10, 'bot11'),
(11, 'bot11'),(12, 'bot12'),(13, 'bot13'),(14, 'bot14'),(15, 'bot15'),
(16, 'bot16'),(17, 'bot17'),(18, 'bot18'),(19, 'bot19'),(20, 'bot20');



INSERT INTO HASHTAGS (HASHTAG_ID, NAME_TAGD) VALUES
(1, 'world'),(2, 'peace'),(3, 'world'),(4, 'peace'),(5, 'world'),
(6, 'peace'),(7, 'world'),(8, 'peace'),(9, 'world'),(10, 'peace'),
(11, 'world'),(12, 'peace'),(13, 'world'),(14, 'peace'),(15, 'world'),
(16, 'peace'),(17, 'world'),(18, 'peace'),(19, 'world'),(20, 'peace');



INSERT INTO LIKES (LIKE_ID, NAME_LIKED) VALUES
(1, 'bot1'),(2, 'bot8'),(3, 'bot1'),(4, 'bot8'),(5, 'bot1'),
(6, 'bot8'),(7, 'bot1'),(8, 'bot8'),(9, 'bot1'),(10, 'bot8'),
(11, 'bot1'),(12, 'bot8'),(13, 'bot1'),(14, 'bot8'),(15, 'bot1'),
(16, 'bot8'),(17, 'world'),(18, 'bot8'),(19, 'world'),(20, 'bot8');



INSERT INTO POST (POST_ID, USER_ID, DESCR, CREATED_AT, PHOTO_LINK, LIKE_ID, HASHTAG_ID) VALUES
(1, 10, 'Hello world!', '2020-01-01 10:18:00', 'image.com', 1, 20),
(2, 9, 'Hello world!', '2020-01-01 10:20:00', 'image.com', 2, 16),
(3, 2, 'Hello world!', CURDATE(), 'image.com', 3, 15),
(4, 2, 'Hello world!', CURDATE(), 'image.com', 4, 14),
(5, 2, 'Hello world!', CURDATE(), 'image.com', 5, 8),
(6, 2, 'Hello world!', CURDATE(), 'image.com', 6, 10),
(7, 4, 'Hello world!', '2020-04-09 21:17:00', 'image.com', 7, 1),
(8, 3, 'Hello world!', '2020-02-01 20:10:00', 'image.com', 20, 2),
(9, 2, 'Hello world!', '2020-03-01 15:13:00', 'image.com', 15, 6),
(10, 1, 'Hello world!', '2020-04-09 15:12:00', 'image.com', 7, 3);



