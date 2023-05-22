const mongoose = require("mongoose");

const asignaturaDefinidaSchema = new mongoose.Schema({
  nombre: String,
  clave: String,
  ae: {
    type: [String],
  },
});

const asignaturaDefinida = mongoose.model(
  "asignaturaDefinida",
  asignaturaDefinidaSchema
);

module.exports = asignaturaDefinida;
