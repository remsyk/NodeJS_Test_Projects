var _ = require('underscore');
var colors = require('colors');

var data = [
	{id: 1, firstName: 'John', lastName: 'Smith'},
	{id: 2, firstName: 'Jane', lastName: 'Smith'},
	{id: 3, firstName: 'John', lastName: 'Doe'}
];

var lookupById = function(id){
	return _.findWhere(data, {id: id });

};

var lookupByLastName = function(lastName){
	return _.where(data, {lastName: lastName});
	 
};

var addEmployee = function(firstName, lastName){
	var newId = function (data) {
            var id = _.max(data, function (data) {
                return data.id;
            });
            return id.id + 1;
        }
        data.push( {id:newId(data), firstName: firstName, lastName: lastName });
        return data;
};


module.exports= {
	lookupById: lookupById,
	lookupByLastName: lookupByLastName,
	addEmployee: addEmployee,
	data: data
};



