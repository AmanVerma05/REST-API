const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGODB_URL;
const PORT = process.env.PORT
const routers = require("./routers/empRoutes");
const app = express();

mongoose.connect(url);
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected");
});

app.use(express.json());
app.use("/api", routers);

app.listen(PORT, () => {
  console.log("Server Started");
});
