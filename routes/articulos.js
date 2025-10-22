const express = require("express");
const router = express.Router();
const Articulo = require("../models/Articulo");

// 🔹 Obtener todos los artículos
router.get("/", async (req, res) => {
  try {
    const articulos = await Articulo.find();
    res.json(articulos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener artículos" });
  }
});

// 🔹 Obtener un artículo por ID
router.get("/:id", async (req, res) => {
  try {
    const articulo = await Articulo.findById(req.params.id);
    if (!articulo) return res.status(404).json({ message: "Artículo no encontrado" });
    res.json(articulo);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el artículo" });
  }
});

// 🔹 Crear un artículo
router.post("/", async (req, res) => {
  try {
    const nuevo = new Articulo(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ error: "Error al crear el artículo" });
  }
});

// 🔹 Actualizar un artículo
router.put("/:id", async (req, res) => {
  try {
    const actualizado = await Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ message: "Artículo no encontrado" });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el artículo" });
  }
});

// 🔹 Eliminar un artículo
router.delete("/:id", async (req, res) => {
  try {
    const eliminado = await Articulo.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ message: "Artículo no encontrado" });
    res.json({ message: "Artículo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el artículo" });
  }
});

module.exports = router;
