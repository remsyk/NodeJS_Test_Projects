var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
  function saveEmployee(req , res , next){
    var id = req.params.id;

    Employee.findById(id, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err);
      if (!employee)
        return res.render('404');

        employee.eid = req.body.eid
        employee.firstName = req.body.firstName
        employee.lastName = req.body.lastName;

        employee.save(function (err) {
          if (err)
            console.log("Error updating : %s ",err );
          res.redirect('/employee');
        });
    });
  };
