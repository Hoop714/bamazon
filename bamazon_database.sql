DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2),
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Noise Cancelling Headphones", "Electronics", "59.99", "1000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4", "Electronics", "249.99", "20000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lego Star Wars", "Toys", "170.40", "5500");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NERF Zombie Strike Alternator Blaster", "Toys", "14.99", "50000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spalding Basketball", "Sports", "24.29", "75000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rawling Baseball Glove", "Sports", "55.99", "80000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coding All-in-One For Dummies", "Books", "17.99", "60000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CFA Program Curriculum", "Books", "232.99", "10000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2-in-1 Leather Recliner", "Home & Kitchen", "389.000", "2000");

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frame Computer Desk", "Home & Kitchen", "39.55", "3000");


CREATE TABLE Departments(
    department_ID MEDIUMINT AUTO_INCREMENT NOT NULL,
    department_Name VARCHAR(50) NOT NULL,
    overheadCosts DECIMAL(10,2) NOT NULL,
    totalSales DECIMAL(10,2) NOT NULL,
    PRIMARY KEY(department_ID));


INSERT INTO Departments(department_Name, overheadCosts, totalSales)
VALUES ('ENTERTAINMENT', 500000.00, 20000.00),
    ('Sports', 200000.00, 18000.00),
    ('Books', 100000.00, 8000.00),
    ('Toys', 300000.00, 10000.00),
    ('Electronics', 300000.00, 10000.00);

    
ALTER TABLE Departments ADD COLUMN product_sales DECIMAL(7,2) DEFAULT '0.00';
