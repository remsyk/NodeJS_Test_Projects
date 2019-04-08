var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
	function editEmployee(req , res , next){
    var id = req.params.id;

    Employee.findById(id, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err);
      if (!employee)
        return res.render('404');
      res.render('editEmployeeView',
          {title:"Edit employee",
           data: {
						 id: employee._id,
						 eid: employee.eid,
            firstName: employee.firstName,
            lastName:  employee.lastName}
          });
    });
};
