//app.js connects all the different files and runs the api
const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("./mysql"); //connects mysql.js to app.js

const usersRouter = require("./users"); // "/" to allow frontend to call backend
const transactionsRouter = require("./transactions");
const accountsRouter = require("./accounts");
const messagesRouter = require("./messages");

app = express();

app.use(bodyParser.json());
app.use("/", usersRouter); //use customerRouter in app
app.use("/", transactionsRouter);
app.use("/", accountsRouter);
app.use("/", messagesRouter);


app.listen(8000);