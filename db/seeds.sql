USE burgers2;

INSERT INTO Burgers(burger_name, devoured)
	VALUES("Other Burger", false),
        ("The Reubenator", false),
        ("The Dripper", true),
        ("Cheez Berg", true),
        ("Spicy Angus", true),
        ("Patty Melt", false),
        ("Cheesy Mistake", false),
        ("Gut Wrencher", true),
        ("Bum Bender", false),
        ("Greasenator", true)
;

INSERT INTO Baters(eater_name, burgerId)
        VALUES("Doofenshmirtz", 3),
        ("Star", 4),
        ("Solaire", 5),
        ("DDD", 8),
        ("Wario", 10)
;

SELECT * FROM burgers;
SELECT * FROM eaters;