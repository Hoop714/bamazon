var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon"
  });

function start(){
  inquirer.prompt([{
    type: "list",
    name: "doThing",
    message: "What would you like to do?",
    choices: ["View Product Sales by Department", "Create New Department", "End Session"]
  }]).then(function(ans){
    switch(ans.doThing){
      case "View Product Sales by Department": viewSalesByDept();
      break;
      case "Create New Department": createNewDept();
      break;
      case "End Session": connection.end();
      break;
    }
  });
}

//view product sales by department
function viewSalesByDept(){
  //prints the items for sale and their details
  connection.query('SELECT * FROM Departments', function(err, res){
    if(err) throw err;
    var theDisplayTable = new Table({
        head: ['ID', 'Department Name', 'Overhead Costs', 'Total Slaes'],
        colWidths: [10, 30, 18, 14]
    });
    for (i = 0; i < res.length; i++) {
        theDisplayTable.push(
            [res[i].department_ID, res[i].department_Name, res[i].overheadCosts, res[i].totalSales]
        );
    }
    console.log(theDisplayTable.toString());
    start();
  })
}

  //create a new department
  function createNewDept(){
    console.log('>>>>>>Creating New Department<<<<<<');
    //prompts to add deptName and numbers. if no value is then by default = 0
    inquirer.prompt([
    {
      type: "input",
      name: "deptName",
      message: "Department Name: "
    }, {
      type: "input",
      name: "overHeadCost",
      message: "Over Head Cost: ",
      default: 0,
      validate: function(val){
        if(isNaN(val) === false){return true;}
        else{return false;}
      }
    }, {
      type: "input",
      name: "prodSales",
      message: "Product Sales: ",
      default: 0,
      validate: function(val){
        if(isNaN(val) === false){return true;}
        else{return false;}
      }
    }
    ]).then(function(ans){
      connection.query('INSERT INTO Departments SET ?',{
        department_Name: ans.deptName,
        overheadCosts: ans.overHeadCost,
        totalSales: ans.prodSales
      }, 
      function(err, res){
        if(err) throw err;
      }
      )
      start();
    });
  }
start();