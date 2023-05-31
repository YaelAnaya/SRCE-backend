const mongoose = require("mongoose");

const indicadorSchema = new mongoose.Schema({
  idIndicador: String,
  claveAsignatura: String,
  id_AE: String,
  idCD: String,
  descripcionIndicador: String,
  tareaIndicador: String,
  id_Tarea: String,
});

const indicador = mongoose.model("indicador", indicadorSchema);

module.exports = indicador;
