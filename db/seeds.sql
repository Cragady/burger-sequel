USE burgers_db;

INSERT INTO burgers(burger_name, devoured)
	values("Other Burger", false),
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

SELECT * FROM burgers;