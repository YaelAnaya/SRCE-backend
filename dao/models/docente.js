const mongoose = require('mongoose');

const docenteSchema = new mongoose.Schema({
  name: String,
  correo: String,
  asignaturas: {
    type: [String]
  }
});

const docente = mongoose.model('docente', docenteSchema);

module.exports = docente;
