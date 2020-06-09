const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");

const routes = require("./routes");
// const profiles = require("./profilesDB");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

//connect to mongoDB
const uri = process.env.MONGODB_URI || "mongodb://localhost/dbprofiles";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    autoIndex: false,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Mongo connection established successfully.");
  })
  .catch(console.error);


app.listen(port, () => console.log(`Listening on port ${port}`));