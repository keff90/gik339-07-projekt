DROP TABLE IF EXISTS godis;
CREATE TABLE IF NOT EXISTS godis(
   id        INTEGER  NOT NULL PRIMARY KEY AUTOINCREMENT
  ,godisName VARCHAR(8) NOT NULL
  ,color     VARCHAR(6) NOT NULL
  ,price     MONEY NOT NULL
);
INSERT INTO godis(id, godisName, color, price) VALUES (1, 'Colanappar', 'Brown', '15,58');
INSERT INTO godis(id, godisName, color, price) VALUES (2, 'Kryptoniter', 'Pink', '18,49');
INSERT INTO godis(id, godisName, color, price) VALUES (3, 'Segaråttor', 'Green', '9,29');
INSERT INTO godis(id, godisName, color, price) VALUES (4, 'Lakritsbåtar', 'Black', '14,29');
INSERT INTO godis(id, godisName, color, price) VALUES (5, 'Gelehallon', 'Red', '12,49');
INSERT INTO godis(id, godisName, color, price) VALUES (6, 'Bilar', 'White', '20,95');
INSERT INTO godis(id, godisName, color, price) VALUES (7, 'Fruktnappar', 'Yellow', '15,58');
INSERT INTO godis(id, godisName, color, price) VALUES (8, 'Toffifee', 'Brown', '29,90');
INSERT INTO godis(id, godisName, color, price) VALUES (9, 'Choklad', 'Brown', '32,90');
INSERT INTO godis(id, godisName, color, price) VALUES (10, 'Remmar', 'Blue', '12,49');
INSERT INTO godis(id, godisName, color, price) VALUES (11, 'Suraremmar', 'Green', '12,49');
INSERT INTO godis(id, godisName, color, price) VALUES (12, 'Kexchocklad', 'Brown', '11,99');


select * from godis;