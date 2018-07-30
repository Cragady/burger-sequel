USE burgers2;

INSERT INTO burgers(burger_name, devoured)
	values("Other Burger", false),
        ("The Reubenator", false),
        ("The Dripper", false),
        ("Cheez Berg", false),
        ("Spicy Angus", false),
        ("Patty Melt", false),
        ("Cheesy Mistake", false),
        ("Gut Wrencher", false),
        ("Bum Bender", false),
        ("Greasenator", true)
;

INSERT INTO eaters(eater_name, burgerId)
        VALUES("Joe", 10);

SELECT * FROM burgers;
SELECT * FROM eaters;