module.exports =
	function addEmployee(req , res , next){
  	res.render('addEmployeeView',
  		{title:"Add a Employee"});
};
