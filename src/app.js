const express = require("express");
const cors = require("cors");
const morgan = require('morgan');

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//Routes
app.use("/api/token", require("./routes/token"));
app.use("/api/glasses", require("./routes/glasses"));

module.exports = app;