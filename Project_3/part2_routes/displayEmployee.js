var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
	function displayEmployee(req , res , next){
    Employee.find({}, function(err , employee){
      if(err)
          console.log("Error : %s ",err);

      var results = employee.map(function (employee){
      	return {
					id: employee._id,
          eid: employee.eid,
          firstName: employee.firstName,
					lastName: employee.lastName,
      	}
      });
      res.render('displayEmployeeView',
      	{title:"List of Employees", data:results});
    });
};
