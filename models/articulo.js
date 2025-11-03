const mongoose = require("mongoose");

const articuloSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autores: { type: String, required: true },
  anioPublicacion: { type: Number, required: true },
  resumen: { type: String },
  cantidadReferencias: { type: Number },
  baseDatos: { type: String },
  revistaLibro: { type: String },
  enlace: { type: String },
  pdf: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model("Articulo", articuloSchema);
