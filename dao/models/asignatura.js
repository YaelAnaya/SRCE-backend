const mongoose = require("mongoose");

const asignaturaSchema = new mongoose.Schema({
  id_Asignatura: String,
  nombreAsignatura: String,
  claveAsignatura: String,
  atributosDeEgreso: {
    type: [String],
  },
});

const asignatura = mongoose.model("asignatura", asignaturaSchema);

module.exports = asignatura;
