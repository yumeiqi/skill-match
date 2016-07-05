var express = require('express');
var skill = express();
var mysql = require('mysql');
var path = require('path');

skill.use(express.static(path.join(__dirname, 'public')));
var matchs = require('./db.json');
// var db = mysql.createConnection({
// 	host: 		'127.0.0.1',
// 	user: 		'foodshop',
// 	password: 	'123456',
// 	database: 	'skills'
// });

var data = require('./lib/data');
matchs.credentials.database = matchs.db;
var db = mysql.createConnection(matchs.credentials);
// logger.info ("cors is set to: " + matchs.cors);

skill.get('/lib/data', function(req, res){
  data.list(db, req, res);
});

skill.listen(3000);