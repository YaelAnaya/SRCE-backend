const Asignatura = require("./models/asignatura");
const AsignaturaDefinida = require("./models/asignaturaDefinida");
const Docente = require("./models/docente");
class asignaturasDAO {
  constructor() {}

  async obtenerAsignaturas(clavesAsignaturas) {
    try {
      const claves = clavesAsignaturas.map((obj) => obj.clavesAsignaturas);
      const asignaturas = await AsignaturaDefinida.find({
        clave: { $in: claves.flat() },
      });

      return asignaturas;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener las asignaturas.");
    }
  }

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
      const count = await Docente.countDocuments({
        id_Asignaturas: id_Asignatura,
      });
      return count > 0;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar la asignatura.");
    }
  }
}

module.exports = asignaturasDAO;
