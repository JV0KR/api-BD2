const express = require("express");
const cors = require("cors");
const articulosRoutes = require("./routes/articulos");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/articulos", articulosRoutes);

module.exports = app;
