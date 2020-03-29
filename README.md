# bamazon

---

Welcome to BAMAZON! 

BAMAZON is an Amazon-like storefront created with a mySQL database.  The app takes in orders from customers and deplete stock from the store's inventory. There is also a Manager page that allows a manager to view products, view products with low inventory, add to inventory, and add a new product.

---
## Bamazon Customer

When the BAMAZON Customer script is run, a table with all available products is first displayed:

*Example*:

![image1](https://github.com/Hoop714/bamazon/blob/master/images/bamazonCustomer1.PNG?raw=true)

After the customer sees the product list, they are required to input the Item ID they wish to purchase and how many of that item they wish to purchase from that list. Once inputted, the total cost for the product is posted:

*Example*:

![image2](https://github.com/Hoop714/bamazon/blob/master/images/bamazonCustomer2.PNG?raw=true)

The user's order also reduces the inventory available for that particular product.

The user is then able to add an additional product for purchase if they wish to do so.

---
## Bamazon Manager

The BAMAZON Manger script allows a manager to run four different functions. Each function is described below.

*Example*:

![image3](https://github.com/Hoop714/bamazon/blob/master/images/bamazonManager1.PNG?raw=true)

1. **View Products for Sale**: Allows a manager to view all available products:

*Example*:

![image4](https://github.com/Hoop714/bamazon/blob/master/images/bamazonManager2.PNG?raw=true)

2. **View Low Inventory**: Allows a manager to view any products where the inventory is low. This function will query for all products where the inventory is less than 2,000.

*Example*:

![image5](https://github.com/Hoop714/bamazon/blob/master/images/bamazonManager3.PNG?raw=true)

3. **Add to Inventory**: Allows a manager to add inventory for a particular product. When inventory is added, the Quantity field for that particular product will increase.

*Example*:

![image6](https://github.com/Hoop714/bamazon/blob/master/images/bamazonManager4.PNG?raw=true)

Note: the previous quantity for "Lego Star Wars" was 5,500.

4. **Add New Product**: Allows a manager to add an entirely new product to the inventory. In the below example, 'The Pragmatic Programmer' was added.

*Example*:

![image7](https://github.com/Hoop714/bamazon/blob/master/images/bamazonManager5.PNG?raw=true)

---
## Bamazon Supervisor

The BAMAZON Supervisor script allows a Supervisor to view Product Sales by Department, and create a New Department. Both functions are described below.

*Example*:

![image8](https://github.com/Hoop714/bamazon/blob/master/images/bamazonSupervisor1.PNG?raw=true)

1. **View Products Sales by Department**: Allows a Supervisor to view all available the total costs and sales by each department. The profit is also calculated:

*Example*:

![image9](https://github.com/Hoop714/bamazon/blob/master/images/bamazonSupervisor2.PNG?raw=true)

2. **Create New Department**: Allows a Supervisor to add a new Department, with overhead costs and total sales included:

*Example*:

![image10](https://github.com/Hoop714/bamazon/blob/master/images/bamazonSupervisor3.PNG?raw=true)
---
## Technologies Used

1. Javascript
2. JSON
3. Multiple Node Modules
   * mySQL
   * Inquirer
   * Table-cli
4. mySQL Workbench


