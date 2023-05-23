const mongoose = require('mongoose');

const criterioDeDesempeñoSchema = new mongoose.Schema({
  id_CriterioDeDesempeño: String,
  descripcion: String,
  indicadores: {
    type: [String]
  }
});

const criterioDeDesempeño = mongoose.model('criterioDeDesempeño', criterioDeDesempeñoSchema);

module.exports = criterioDeDesempeño;
