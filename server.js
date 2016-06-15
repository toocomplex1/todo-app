var express = require('express');//import express dependency
var app = express();//ap is going to use it
//var path = require('path');
//var bodyParser = require('body-parser');
//var routes = require('server/routes');

var PORT = process.env.PORT || 3000;



app.all('/*', function(req, res) {
    res.send('\
    	<!DOCTYPE html>\
		<html>\
    		<head>\
        		<title>MEAN ToDo App</title>\
    		</head>\
    		<body>\
            <h1> hello </h1>\
            <script src="bundle.js"></script>\
            </body>\
			</html>\
    	');
});

app.listen(PORT, function() {
    console.log('Server running on ' + PORT);
});