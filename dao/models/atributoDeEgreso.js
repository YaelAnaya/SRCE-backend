const mongoose = require('mongoose');

const atributoDeEgresoSchema = new mongoose.Schema({
  id_AtributosDeEgreso: String,
  descripcion: String,
  criteriosDeDesempeño: {
    type: [String]
  }
});

const atributoDeEgreso = mongoose.model('atributoDeEgreso', atributoDeEgresoSchema);

module.exports = atributoDeEgreso;
