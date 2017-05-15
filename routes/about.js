var express = require('express');
var router = express.Router();
var Book = require('../modals/book');
var Cart = require('../modals/cart');
var Review = require('../modals/review');
var uuid = require('node-uuid');

router.get('/', function(req, res){
    res.render('about');   
});
module.exports=router;