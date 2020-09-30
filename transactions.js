const express = require("express");

router = express.Router();

const mysqlConnection = require("./mysql"); //imports mysql file

//get: to retrieve data from transaction table
router.get("/user_transaction", (req, res) => {
    mysqlConnection.query(`select * from transactions where transaction_type = ('${req.body.transaction_type}')`, (err, results) => {
        if (err) {
            res.send("Error occured");
            console.log(err);
        } else {
            res.send(results);
        }
    })
});

//post: insert data into transaction data
router.post("/user_transaction", (req, res) => {
    mysqlConnection.query(
        `insert into transactions(id, transaction_type, account_number, amount_spent, date_spent)
        values (${req.body.id}, '${req.body.transaction_type}', '${req.body.account_number}', ${req.body.amount_spent}, '${req.body.date_spent}')`,
        (err, results) => {
            if (err) {
                res.send("Error occured");
                console.log(err); 
            } else {
                res.send("Data inserted successfully");
                res.send(results);
            }});
});

//put: to update data in transaction table
router.put("/user_transaction", (req, res) => {
    mysqlConnection.query(
        `update transactions set transaction_type = '${req.body.transaction_type}' where id = ${req.body.id}`,
        (err, results) => {
            if (err) {
                res.send("Error occured");
                console.log(err); 
            } else {
                res.send("Data updated successfully");
                res.send(results);
            }})
});

//delete data from transaction table
router.delete("/user_transaction", (req, res) => {
    mysqlConnection.query(
        `delete from transactions where id = ${req.body.id}`, (err, results) => {
            if (err) {
                res.send("Error occured");
                console.log(err);
            } else {
                res.send("Data deleted successfully");
                res.send(results);
            }})
            console.log("Data deleted successfully");
});

module.exports = router; 