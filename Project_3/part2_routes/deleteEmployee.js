var DB = require('./dbConnection.js');
var Employee = DB.getModel();

module.exports =
	function deleteEmployee(req , res , next){
    var id = req.params.id;

    Employee.findById(id, function (err, employee){
      if(err)
        console.log("Error Selecting : %s ", err);
      if (!employee)
        return res.render('404');

      employee.remove(function (err) {
        if (err)
          console.log("Error deleting : %s ",err );
        res.redirect('/employee');
      });
    });
  };
