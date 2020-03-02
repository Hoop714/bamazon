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
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayProducts();
});

function displayProducts() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        if (err) { console.log(err) };
        var theDisplayTable = new Table({
            head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
            colWidths: [10, 30, 18, 10, 14]
        });
        for (i = 0; i < res.length; i++) {
            theDisplayTable.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(theDisplayTable.toString());
        runQuery();
    });
};

function runQuery() {
  inquirer.prompt([{
          type: "input",
          name: "item_id",
          message: "Please enter the Item ID of the product you wish to purchase.",
          validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
              }
              return false;
          }
      },
      {
          type: "input",
          name: "quantity",
          message: "Please enter the quantity you wish to purchase.",
          validate: function(value) {
              if (isNaN(value) === false) {
                  return true;
              }
              return false;
          }
      }

  ]).then(function(answers) {
      var query = "SELECT * FROM products WHERE ?";
      connection.query(query, { item_id: answers.item_id }, function(err, res) {
          if (err) throw err;
          var item_id = res[0].item_id;
          var newQuant = res[0].stock_quantity - answers.quantity,
              orderPrice = res[0].price * answers.quantity;
          var totalSales = res[0].product_sales + orderPrice;
          if (res[0].stock_quantity < answers.quantity) {
              console.log("Insufficient Quantity!");
              connection.end();
          } else {
              connection.query('UPDATE products SET ? WHERE item_id = ?', [{ stock_quantity: newQuant, product_sales: totalSales }, item_id],
                  function(err, res) {
                      console.log("Order successful! Total cost: $" + orderPrice);
                      inquirer.prompt([{
                          name: "confirm",
                          type: "confirm",
                          message: "Make another purchase?"
                      }]).then(function(answers) {
                          if (answers.confirm === true) {
                              displayProducts();
                          } else {
                              connection.end();
                          }
                      })

                  });
          }
      });
  })

}
