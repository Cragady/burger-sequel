var connection = require("../config/connection.js");

//sqlEyesObj is required so that objects can be
//parsed into readable strings for the sql database
function sqlEyesObj(ob){
    var arr = [];
    for(var key in ob){
        var value = ob[key];
        if(Object.hasOwnProperty.call(ob, key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            };
            arr.push(key + "=" + value);
        };
    }
    return arr.toString();
};

var orm = {
    selectAll: function(tabIn, cb){
        var querSt = "SELECT * FROM " + tabIn + ";";
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(table, cols, vals, cb){
        var querSt = "INSERT INTO " + table;
        querSt += " (";
        querSt += cols.toString();
        querSt += ") VALUES (?) ";
        connection.query(querSt, vals, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table, objColVals, condition, cb){
        var querSt = "UPDATE " + table;
        querSt += " SET ";
        querSt += sqlEyesObj(objColVals);
        querSt += " WHERE ";
        querSt += condition;
        connection.query(querSt, function(err, res){
            if(err) throw err;
            cb(res);
        });
    }
};

module.exports = orm;