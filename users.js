const express = require("express");

router = express.Router();

const mysqlConnection = require("./mysql"); //imports mysql file

//get: to retrieve all data from users table
router.get("/user", (req, res) => {
    mysqlConnection.query(`select * from users`, (err, results) => {
        if (err) {
            res.send("Error occured");
            console.log(err);
        } else {
            res.send(results);
        }
    });
});

//get: to retrieve data from users table based on gender
router.get("/user/gender", (req, res) => {
    mysqlConnection.query(`select * from users where gender = ('${req.body.gender}')`, (err, results) => {
        if (err) {
            console.log(err);
            res.send("Error occured");
        } if (err = []) {
            res.send("Error occured");
        } else {
            res.send(results);
        }});
});

//post: insert data into user table
router.post("/user", (req, res) => {
    mysqlConnection.query(
        `insert into users(id, first_name, gender, age, ic_number, mobile, email, password)
        values (${req.body.id}, '${req.body.first_name}', '${req.body.gender}', ${req.body.age}, ${req.body.ic_number}, '${req.body.mobile}', '${req.body.email}', '${req.body.password}')`,
        (err, results) => {
            if (err) {
                console.log(err); 
                res.send("Error occured");
            } else {
                res.send ("Data inserted successfully");
                res.send(results);
            }});
});

//put: to update data in user table
router.put("/user", (req, res) => {
    mysqlConnection.query(
        `update users set first_name = '${req.body.first_name}', email = '${req.body.email}' where id = ${req.body.id}`,
        (err, results) => {
            if (err) {
                console.log(err); 
                res.send("Error occured");
            } else {
                res.send("Data updated successfully");
                res.send(results);
            }})
});

//delete data from user table
router.delete("/user/id", (req, res) => {
    mysqlConnection.query(
        `delete from users where id = ${req.body.id}`, (err, results) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Data deleted successfully");
                res.send(results);
            }})
});

module.exports = router;