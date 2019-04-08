var mongoose = require ('mongoose');

var dbUrl = 'mongodb://127.0.0.1:27017/cs602d';
var connection = mongoose.createConnection(dbUrl);

var EmployeeDb= require('./part1_schema.js');
var Employee = EmployeeDb.getModel(connection);

connection.on("open", function(){

  var employee;

  employee = new Employee({
    id: 'wwwwwwwwwww',
    firstName: 'sssssseeeeeeeeeeeeee',
    lastName: 'sssssssssss'
  });
  employee.save();


  employee.save(function(err){
    connection.close();
    if(err) throw err;
    console.log("Success!");
  });
});
