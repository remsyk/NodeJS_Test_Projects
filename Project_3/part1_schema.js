var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
  id: String,
  firstName: String,
  lastName:String
});

module.exports = {
  getModel: function getModel(connection){
    return connection.model("EmployeeModel",employeeSchema);
  }
}
