require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
// middleware
const morgan = require("morgan");

const app = express();
const port = 8080;

const dbURI = "";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

// register view engine:
// app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log("listening on port ", port);
  console.log(`http://localhost:${port}`);
});

// static files loc:
// app.use(express.static("public"));

// middleware setup:
app.use(morgan("dev"));
// url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
