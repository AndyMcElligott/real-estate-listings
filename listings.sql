CREATE TABLE listings(
	"id" SERIAL PRIMARY KEY,
	"cost" INTEGER,
	"sqft" INTEGER,
	"type" VARCHAR(32),
    "city" VARCHAR (64),
    "image_path" VARCHAR(256)
);

INSERT INTO "listings" ("cost", "sqft", "type", "city", "image_path")
VALUES (123000, 1500, 'sale', 'Forest Lake', 'images/shiny.jpg'),
(90000, 1200, 'sale', 'Blaine', 'images/stony.jpg'),
(127500, 1600, 'sale', 'Oakdale', 'images/haunted.png'),
(126100, 1350, 'sale', 'Rochester', 'images/older.jpg'),
(105300, 900, 'sale', 'Zimmerman', 'images/shiny.jpg'),
(135300, 1800, 'sale', 'Hopkins', 'images/older.jpg'),
(51000, 500, 'sale', 'Grand Rapids', 'images/stony.jpg'),
(49500, 900, 'sale', 'Fergus Falls', 'images/haunted.png'),
(159600, 1900, 'sale', 'Lake City', 'images/shiny.jpg'),
(96300, 800, 'sale', 'Hibbing', 'images/shiny.jpg'),
(139400, 1700, 'sale', 'Savage', 'images/stony.jpg'),
(248400, 2300, 'sale', 'Oakdale', 'images/older.jpg'),
(148200, 1300, 'sale', 'Minneapolis', 'images/older.jpg'),
(170100, 2100, 'sale', 'New Brighton', 'images/stony.jpg'),
(63600, 1200, 'sale', 'Plymouth', 'images/haunted.png'),
(700, 400, 'rent', 'Victoria', 'images/classic-flats.jpg'),
(500, 900, 'rent', 'Waconia', 'images/rental.jpg'),
(800, 1100, 'rent', 'Falcon Heights', 'images/rental2.jpg'),
(600, 850, 'rent', 'Lake City', 'images/classic-flats.jpg'),
(1200, 800, 'rent', 'Champlin', 'images/rental2.jpg'),
(1050, 1300, 'rent', 'Mound', 'images/rental.jpg'),
(800, 1150, 'rent', 'Dayton', 'images/classic-flats.jpg'),
(750, 1300, 'rent', 'Anoka', 'images/rental2.jpg'),
(850, 1320, 'rent', 'Maplewood', 'images/classic-flats.jpg'),
(1100, 1200, 'rent', 'Savage', 'images/rental.jpg'),
(950, 1200, 'rent', 'Robbinsdale', 'images/rental2.jpg'),
(700, 650, 'rent', 'Marshall', 'images/classic-flats.jpg');

SELECT * FROM listings;