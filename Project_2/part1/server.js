var net = require('net');
var employeeModule = require('./employeeModule');

var server = net.createServer(
	function(socket){
		console.log("Client connection...");
		
		socket.on('end', function(){
			console.log("Client disconnected...");
		});

		//process data from client
		socket.on('data', function(data){
			var str = data.toString().split(/[ ,]+/);
			var str1 = str[0];
			var str2 = str[1];
			var int1 = parseInt(str[1]);
			var str3 = str[2];
			
			if(str1=="lookupByLastName"){
				socket.write(JSON.stringify(employeeModule.lookupByLastName(str2)));
			}else if(str1 == "addEmployee"){
				socket.write(JSON.stringify(employeeModule.addEmployee(str2, str3)));
			}else if (str1 == "lookupById"){
				socket.write(JSON.stringify(employeeModule.lookupById(int1)));
			
			}else{
				socket.write("Invalid request");
				
			}
			console.log("Received: "+ str1+ " "+ str2+" "+ str3);
			
		});
	});


//listen for client connections
server.listen(3000, function(){
	console.log("Listening for connections");
});
