var DB = require('./dbConnection.js');
var Employee = DB.getModel();
var server = require('./server');
var playerStat = server.PlayerStat;
module.exports =
  function saveEmployee(req , res , next){

    var employee = new Employee({
      eid:     req.body.eid,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    employee.save(function (err){
      if(err)
        console.log("Error : %s ",err);
      res.redirect('/employee');
    });

  };
