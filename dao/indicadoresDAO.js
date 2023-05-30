const Indicador = require("./models/indicador");
class indicadoresDAO {
  constructor() {}

  async obtenerIndicadores() {
    try {
      return await Indicador.find({});
    } catch (error) {
      console.log(error);
    }
  }
  async guardarIndicador(
    idIndicador,
    claveAsignatura,
    idAE,
    idCD,
    descripcionIndicador,
    tareaIndicador,
    idTarea
  ) {
    try {
      Indicador.create({
        idIndicador,
        claveAsignatura,
        id_AE,
        idCD,
        descripcionIndicador,
        tareaIndicador,
        id_Tarea,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = indicadoresDAO;
