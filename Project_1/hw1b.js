var _ = require('underscore');
var employeeEmitter = require('./employeeEmitter');

var data = [
  {id:1, firstName: 'John', lastName: 'Smith'},
  {id:2, firstName: 'Jane', lastName: 'Smith'},
  {id:3, firstName: 'John', lastName: 'Doe'}
   ];

  var employeeEmitter = new employeeEmitter(data);
  employeeEmitter.on('event1', function(data) {});

  employeeEmitter.lookupByLastName(data,'Smith');
  employeeEmitter.addEmployee(data, 'William', 'Smith');
  employeeEmitter.lookupByLastName(data,'Smith');
  employeeEmitter.lookupById(data,2);
