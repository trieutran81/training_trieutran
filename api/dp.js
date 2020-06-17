var mongoose = require('mongoose');

const mlabURI = 'mongodb://localhost:27017/mydb'
const dbName = 'mydb';

const con = mongoose.connect(mlabURI, (error) => {
	if(error){
		console.log("Error " + error);
	}else{
		console.log("Connected successfully to server")
	}
});

module.exports = con;