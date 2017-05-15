/**
 * Created by Suraj on 5/3/2017.
 */
var homeRoute = require('./home');
var shopRoute = require('./shop');
var bookRoute = require('./book');
var cartRoute = require('./cart');
var aboutRoute = require('./about');

var constructorMethod = function(app){

    app.use("/", homeRoute);
    app.use("/shop",shopRoute);
    app.use("/book",bookRoute);
    app.use("/cart",cartRoute);
    app.use("/about",aboutRoute);
    app.use("*", function(request,response){
        response.send(404);
        console.log("BAD REQUEST!");
    });
};


module.exports = constructorMethod;