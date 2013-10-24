var Sequelize = require('sequelize');
var express = require('express');
var app = express();
var port = 3000;

var dbName = 'lawyer_scoreboard';
var dbUser = 'root';
var dbPassword = null;

var sequelize = new Sequelize(dbName, dbUser, dbPassword, {
	"host":"localhost"
});  //creating an instance of the sequelize object.

// sequelize.query("SELECT * FROM lawyer_info").success(function(myTableRows){
// 	console.log(myTableRows);
// });

var lawyer = sequelize.define('lawyer_info', {
	name: Sequelize.STRING,
	location: Sequelize.STRING,
	win_record: Sequelize.INTEGER,
	loss_record: Sequelize.INTEGER,
	hourly_rate: Sequelize.INTEGER
},{ 
	freezeTableName:true,	
});

sequelize.sync();

app.get('/lawyers',function(request,response){

	lawyer.all().success(function(lawyers) {
		response.send(lawyers);
	});

});

app.listen(port);
console.log('Server running at ' + port);

console.log("got to the end");