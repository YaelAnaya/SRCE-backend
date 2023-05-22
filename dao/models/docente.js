const mongoose = require("mongoose");

const docenteSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  clavesAsignaturas: {
    type: [String],
  },
  id_Asignaturas: {
    type: [String],
  },
});

const docente = mongoose.model("docente", docenteSchema);

module.exports = docente;
