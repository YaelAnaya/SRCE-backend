const mongoose = require("mongoose");

const aeDefinidoSchema = new mongoose.Schema({
  idAE: String,
  aeDescripcion: String,
  criteriosDesempeño: {
    type: [String],
  },
  idIndicadores: {
    type: [String],
  },
});

const aeDefinido = mongoose.model("aeDefinido", aeDefinidoSchema);

module.exports = aeDefinido;
