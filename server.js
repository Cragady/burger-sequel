var express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    exphbs = require("express-handlebars"),
    routes = require("./controllers/burger_controller.js"),
    PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
app.listen(PORT, function(){
    console.log("Server is listening to you . . . ON PORT: " + PORT);
});
