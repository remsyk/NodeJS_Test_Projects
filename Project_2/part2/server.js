/****************************************************
This assignment is abit of a nightmare. I am really sorry. I am not sure if I
got the XML and JSON GET request handling set up. I was not able to get the express handlebar table built completely for the lastName page. The addEmployee feature works perfectly. The Id page also works, I believe I did it correctly, the assignment didn't really specify. A lot of functionality is not handeled dynamically, so the code works sorta well. Since I was not able to get a bunch of stuff to work through HTML, I have it print to the console to show the functionality is there. JavaScript is reallly hurting my insides.

*****************************************************/


var http = require('http');
var employeeModule = require('./employeeModule');
var _ = require('underscore');
var path = require('path');
var fs = require('fs');
var qs = require('querystring');
var express = require('express');
var app = express();
var expressHandlebars = require('express-handlebars');
var router = express.Router()


app.engine('handlebars', expressHandlebars());  
app.set('view engine', 'handlebars');  

var server = http.createServer(
	//process the request
	function (request, response){
	console.log("Request URL:", request.url, "- Request Method:", request.method);
	
	var mimeLookup ={
		'.js' : 'application/javascript',
		'.pdf' : 'application/pdf',
		'.jpg' : 'application/jpeg',
		'.gif' : 'application/gid',
		'.txt' : 'text/plain',
		'.html' : 'text/html',
		'.ico'  :'image/x-icon'
	};
	
	
	if(request.method == 'GET'){
		var fileName;
		var parsed_data = require('url').parse(request.url,true);
		//parses for the function being called 
		var dirname = path.dirname(parsed_data.pathname).slice(1);

		
		if(request.url=='/'){
			fileName= '/index.html';
			
		}else if (request.url =='/addEmployee'){
			fileName = '/addEmployee.html';
			
		}else if (request.url =='/lastName'){
			fileName = '/lastName.html';
			
		}else if (request.url =='/lastName/Smith'){
			fileName = '/lastName.html';
			console.log(employeeModule.lookupByLastName(basename));
		
		}else if (request.url == "/id"){
			fileName = '/id.html';

			var id = parseInt(basename);
			console.log(employeeModule.lookupById(id));
			
		}else if (request.url == "/id/1"){
			fileName = '/id.html';

			var id = parseInt(basename);
			console.log(employeeModule.lookupById(id));
			
		}else if (request.url == "/id/2"){
			fileName = '/id.html';

			var id = parseInt(basename);
			console.log(employeeModule.lookupById(id));
		}else if (request.url == "/id/3"){
			fileName = '/id.html';

			var id = parseInt(basename);
			console.log(employeeModule.lookupById(id));
			
		}else if (request.url == "/id/4"){
			fileName = '/id.html';

			var id = parseInt(basename);
			console.log(employeeModule.lookupById(id));
			
		}else{
			fileName = request.url;
			fileName = fileName.replace(/\.\./g,"_");
		}
		
		var filepath = path.resolve('./public' + fileName);
		console.log(filepath);
		//determine mime type
		var fileExt = path.extname(filepath);
		var mimeType = mimeLookup[fileExt];
		if(!mimeType){
			sendError('Unknown MIME type', response);
			return;
		}
		
		//check if file exists
		fs.exists(filepath, function (exists){
			//if not
			if(!exists){
				sendError('Resources not found', response);
				return;
			};
			
			//send the file
			response.writeHead(200, {'content-type': mimeType});
			fs.createReadStream(filepath).pipe(response);
		});
		
	}
	if(request.method=='POST'){
		var data ='';

		
		request.on('data', function(chunk){
			data+=chunk;
		});
		
		request.on('end', function(){
			var postData= qs.parse(data);
			//send the response
			response.writeHead(200,
			{'content-type': 'application/json'});
			var postDataData= JSON.stringify(postData);
			var postDataDataData= JSON.parse(postDataData);
		
			console.log(employeeModule.addEmployee(postDataDataData.first_name,postDataDataData.last_name));
			
			app.get('/',function(req,res){  
				res.redirect('http://localhost:3000/lastName');
			});

		});
	}
	
	
	var parsed_data = require('url').parse(request.url,true);
	
	//parses for the function being called 
	var dirname = path.dirname(parsed_data.pathname).slice(1);
		//console.log(dirname);
	//parses name or id that will be input into function
	var basename = path.basename(parsed_data.pathname);
		//console.log(basename);
	
	//handle employeeModule last name lookup
	if(dirname == "lastName"){
		console.log(employeeModule.lookupByLastName(basename));
		
	//handle employeeModule id lookup
	}else if(dirname == "id"){
		var id = parseInt(basename);
		console.log(employeeModule.lookupById(id));
		
	//handle employeeModule last name lookup as query
	}else if(parsed_data.query.id ==null){
		var id = parseInt(parsed_data.query.id);
		console.log(employeeModule.lookupById(id));
		
	}else{
		console.log("Invalid request");
	}
	
	// get all data to put into table
	router.get('/lastName', function (req, res, next) {  
		employee.find({}, function (err, data) {
			res.render('lastName', {title: 'Employees with Last Name Smith', employee: employeeModule.data});
		});
	});
	
	
});

		
server.listen(3000);
console.log('Server running at http://localhost:3000/');