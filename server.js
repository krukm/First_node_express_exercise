"use strict";
const express = require("express");
const app = express();
const shoes = require("./routes/shoes");
const accessories = require('./routes/accessories');

app.use(express.static("./public"));
app.use(express.json());
app.use("/api/shop", shoes);
app.use("/api/shop", accessories);

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});