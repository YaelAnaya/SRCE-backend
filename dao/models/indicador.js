const mongoose = require('mongoose');

const indicadorSchema = new mongoose.Schema({
  id_Indicador: String,
  descripcion: String,
  evidencia: {
    type: [String]
  }
});

const indicador = mongoose.model('indicador', indicadorSchema);

module.exports = indicador;
