var express = require('express'),
    burger = require('../models/burger.js'),
    router = express.Router();

/*This takes the url paramaters from the user input or
from the ajax calls to execute the functions 
tied to the ajax calls, using burger.js in models/ for 
it's methods */
router.get("/", function(req, res){
    burger.all(function(data){
        var handObj = {
            burgers: data
        };
        res.render('index', handObj);
    });
});

router.post("/api/burgers", function(req, res){
    burger.create("burger_name", req.body.burgerName, function(result){
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.udpate({
        devoured: req.body.devoured
    }, condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;