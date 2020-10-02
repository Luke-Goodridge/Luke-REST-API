const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config");

const postRoute = require("./routes/posts");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postRoute);

//Routes
app.get("/", (req, res) => {
  res.send("This is the home URL");
});

//Connect to DB
mongoose.connect(
  //use this DB_CONNECTION from dotenv
  process.env.DB_CONNECTION,
  //This URL parser will stop deprecation warnings
  { useNewUrlParser: true },
  () => console.log("db connected")
);
//How do we start listening to a server
app.listen(3000);
