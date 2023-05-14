const Asignatura = require("./models/asignatura");
class asignaturasDAO {
  constructor() {}

  async guardarClase(id_Asignatura, nombreAsignatura, claveAsignatura) {
    try {
      Asignatura.create({
        id_Asignatura,
        nombreAsignatura,
        claveAsignatura,
      });
    } catch (error) {
      console.log("Error al guardar el curso");
    }
  }

  async existeAsignatura(id_Asignatura) {
    try {
      const count = await Asignatura.countDocuments({
        id_Asignatura: id_Asignatura,
      });
      return count > 0;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar la asignatura.");
    }
  }
}

module.exports = asignaturasDAO;
