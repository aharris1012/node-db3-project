-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT product.productname, category.categoryname 
FROM product 
JOIN category
ON product.categoryid=category.id;
-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT "order".id, shipper.companyname
FROM "order"
JOIN shipper
ON "order".ship=shipper.id
WHERE "order".orderdate < "2012-08-9";
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT product.productname
    , orderdetail.quantity
FROM orderdetail
JOIN product
ON orderdetail.productid=product.id
WHERE orderdetail.orderid=10251
ORDER BY productname;
-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
SELECT "order".id as "Order Id"
    , customer.companyname as "Customer's Company Name"
    , employee.lastname as "Employee's Last Name"
FROM "order"
JOIN customer
ON "order".customerid = customer.id
JOIN employee
