var express = require('express'),
    mdb = require('../models'),
    router = express.Router();

/*This takes the url paramaters from the user input or
from the ajax calls to execute the functions 
tied to the ajax calls, using burger.js in models/ for 
it's methods */
router.get("/", function(req, res){
    mdb.Burgers.findAll({include: mdb.Eaters, order: [["burger_name", "ASC"]]})
    .then(function(results){
        var handObj = {
            burgers: results
        };
        res.render('index', handObj);
    });
});

router.put("/api/burgers/:id", function(req, res){
    mdb.Burgers.update({
        devoured: req.body.devoured
    }, {where: {id: req.params.id}}).then((results) => {
        if(results.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/eaters/:id", function(req, res){
    mdb.Eaters.destroy({
        where: {burgerId: req.params.id}
    }).then((results) => {
        if(results.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        };
    });
});

router.post("/api/burgers", function(req, res){
    mdb.Burgers.create({
        burger_name: req.body.burgerName,
    }).then((results) => {
        res.json({ id: results.insertId});
    });
});

router.post("/api/eaters/:id", function(req, res){
    mdb.Eaters.create({
        burgerId: req.params.id,
        eater_name: req.body.eater_name
    }).then((results) => {
        if(results.changedRows === 0) {
            console.log("oops");
            return res.status(404).end();
        } else {
            console.log("yes");
            res.status(200).end();
        };
    });
});

module.exports = router;