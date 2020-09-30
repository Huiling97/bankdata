const express = require("express");

router = express.Router();

const mysqlConnection = require("./mysql");

//get: to retrieve all data from secured_messages table
router.get("/user_message", (req, res) => {
    mysqlConnection.query(`select * from secured_messages`, (err, results) => {
        if (err) {
            res.send("Error occured");
            console.log(err);
        } else {
            res.send(results);
        }
    })
});

//get: to retrieve based on id
router.get("/user_message", (req, res) => {
    mysqlConnection.query(`select * from secured_messages where id = ('${req.body.id}')`, (err, results) => {
        if (err) {
            res.send("Error occured");
            console.log(err);
        } else {
            res.send(results);
        }
    })
});

//post: send to data to server for server to save
router.post("/user_message", (req, res) => {
    mysqlConnection.query(
        `insert into secured_messages(id, first_name, remarks)
        values (${req.body.id}, '${req.body.first_name}', '${req.body.remarks}')`,
        (err, results) => {
            if (err) {
                res.send("Error occured");
                console.log(err); 
            } else {
                res.send("Data inserted successfully");
                res.send(results);
            }});
});            


//put: to update
router.put("/user_message", (req, res) => {
    mysqlConnection.query(
        `insert into secured_messages first_name = '${req.body.first_name}', remarks = '${req.body.remarks}' where id = ${req.body.id}`,
        (err, results) => {
            if (err) {
                res.send("Error occured");
                console.log(err); 
            } else {
                res.send("Data updated successfully");
                res.send(results);
            }})
});

//delete
router.delete("/user_message", (req, res) => {
    mysqlConnection.query(
        `delete from secured_messages where id = ${req.body.id}`, (err, results) => {
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