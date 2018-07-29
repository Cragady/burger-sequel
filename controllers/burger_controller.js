var express = require('express'),
    mdb = require('../models'),
    router = express.Router();

/*This takes the url paramaters from the user input or
from the ajax calls to execute the functions 
tied to the ajax calls, using burger.js in models/ for 
it's methods */
router.get("/", function(req, res){
    mdb.burgers.findAll({}).then(function(results){
        var handObj = {
            burgers: results
        };
        res.render('index', handObj);
    });
});

router.put("/api/burgers/:id", function(req, res){
    mdb.burgers.update({
        devoured: req.body.devoured
    }, {where: {id: req.params.id}}).then((results) => {
        if(results.changedRows === 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.post("/api/burgers", function(req, res){
    mdb.burgers.create({burger_name: req.body.burgerName})
    .then((results) => {
        res.json({ id: results.insertId});
    });
});
// router.post("/api/burgers", function(req, res){
//     burger.create("burger_name", req.body.burgerName, function(result){
//         res.json({ id: result.insertId });
//     });
// });

// router.put("/api/burgers/:id", function(req, res){
//     var condition = "id = " + req.params.id;
//     burger.udpate({
//         devoured: req.body.devoured
//     }, condition, function(result){
//         if(result.changedRows == 0){
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;