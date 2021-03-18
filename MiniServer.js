const { Router } = require("express");
const express = require("express");
const router = require("./router");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use("/api" ,router)

const server = require("http").createServer(app);
const port = process.env.PORT || 9000;
server.listen(9000);
console.log("Listening on port " + port)
