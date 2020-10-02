const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv/config");
const port = 3000;

const postRoute = require("./routes/posts");
const testRoute = require("./routes/testAPI");

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postRoute);
app.use("/testAPI", testRoute);

//Routes
app.get("/", (req, res) => {
  res.send("This is the home URL");
});

//Connect to DB
mongoose.connect(
  //use this DB_CONNECTION from dotenv
  process.env.DB_CONNECTION,
  //This URL parser will stop deprecation warnings
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("db connected")
);
//How do we start listening to a server
app.listen(port, () =>
  console.log(`App listening at http://localhost:${port}`)
);
