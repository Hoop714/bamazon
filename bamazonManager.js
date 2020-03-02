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
    displayManagerOptions();
});

function displayManagerOptions() {
    inquirer.prompt([{
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
        ]
    }]).then(function(answers) {
        switch (answers.action) {
            case "View Products for Sale":
                displayProducts();
                break;
            case "View Low Inventory":
                viewLow();
                break;
            case "Add to Inventory":
                addInventory();
                break;
            case "Add New Product":
                addNew();
                break;
        }

    });
}

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
        displayManagerOptions();
    });
};

function viewLow() {
    var query = "SELECT * FROM products WHERE stock_quantity < 2000 ";
    connection.query(query, function(err, res) {
        if (err) throw err;
        for (i = 0; i < res.length; i++) {
            console.log("Item ID: " + res[i].item_id + "\nName: " + res[i].product_name +
                "\nPrice: " + res[i].price + "\nQuantity: " + res[i].stock_quantity);
        }
        inquirer.prompt([{
            name: "confirm",
            type: "confirm",
            message: "Return to main menu?"
        }]).then(function(answers) {
            if (answers.confirm === true) {
                displayManagerOptions();
            } else {
                connection.end();
            }
        })

    });

}

function addInventory() {
    inquirer.prompt([{
            type: "input",
            name: "item_id",
            message: "Please enter the Item ID of the product you wish to restock",
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
            message: "Please enter the quantity you wish to add to current inventory",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }

    ]).then(function(answers) {
            connection.query("UPDATE products SET stock_quantity = stock_quantity + " + answers.quantity + " WHERE ?", {item_id: answers.item_id},
                function(err, res) {
                	if (err) throw err;
                    console.log("Inventory added!");
                    inquirer.prompt([{
                        name: "confirm",
                        type: "confirm",
                        message: "Return to main menu?"
                    }]).then(function(answers) {
                        if (answers.confirm === true) {
                            displayManagerOptions();
                        } else {
                            connection.end();
                        }
                    })
                });

        });
}

function addNew() {
    inquirer.prompt([{
            type: "input",
            name: "name",
            message: "Product name:",
        },
        {
            type: "input",
            name: "department",
            message: "Product department:",
        },
        {
            type: "input",
            name: "price",
            message: "Price:",
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
            message: "Quantity:",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }

    ]).then(function(answers) {
        var query = connection.query("INSERT INTO products SET ?", {
                product_name: answers.name,
                department_name: answers.department,
                price: answers.price,
                stock_quantity: answers.quantity
            },
            function(err, res) {
            	if (err) throw err;
                console.log(res.affectedRows + " product added!");
                inquirer.prompt([{
                    name: "confirm",
                    type: "confirm",
                    message: "Return to main menu?"
                }]).then(function(answers) {
                    if (answers.confirm === true) {
                        displayManagerOptions();
                    } else {
                        connection.end();
                    }
                })
            });

    })
}