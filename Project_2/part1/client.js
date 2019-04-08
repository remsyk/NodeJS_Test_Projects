var net = require('net');
var readline = require('readline');


var client = net.connect({port:3000},
	function(){
		console.log("Connected to server");
		readMessage(client);
	});


client.on('end',function(){
	console.log("\nClient disconnected...");
	return;
});

client.on('data', function(data){
	console.log("\n ...Recieved ", data.toString());
	readMessage(client)
});

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

var readMessage = function(client){
	rl.question("Enter Command: ", function(line){
		client.write(line);
		if(line == "bye")
			client.end();
		else
			readMessage(client);
	});
};
