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

SELECT * FROM bamazon;