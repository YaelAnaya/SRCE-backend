const mongoose = require("mongoose");

const docenteSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  clavesAsignaturas: {
    type: [String],
  },
});

const docente = mongoose.model("docente", docenteSchema);

module.exports = docente;
