var _ = require('underscore');
var eventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;  


function employeeEmitter(data){
	this.data=data;
    eventEmitter.call(this);
}
inherits(employeeEmitter, eventEmitter);
	
employeeEmitter.prototype.lookupById = function(data,id){
	var foo =_.findWhere(data, {id: id });
	console.log(foo);
};

employeeEmitter.prototype.lookupByLastName = function(data,lastName){
	var too =_.where(data, {lastName: lastName});
	console.log(too);
	 
};

employeeEmitter.prototype.addEmployee = function(data,firstName, lastName){
	var newId = function (data) {
            var id = _.max(data, function (data) {
                return data.id;
            });
            return id.id + 1;
        }
        data.push( {id:newId(data), firstName: firstName, lastName:lastName });
        
};


module.exports= employeeEmitter;


