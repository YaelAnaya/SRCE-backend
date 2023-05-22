const Docente = require("./models/docente");

class docentesDAO {
  constructor() {}
  async desplegarDocentes() {
    try {
      const docentes = Docente.find({});
      return docentes;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar docentes.");
    }
  }

  async agregarAsignaturaDocente(correo, claveAsignatura, id_Asignatura) {
    try {
      const resultado = await Docente.updateOne(
        { correo: correo },
        {
          $addToSet: {
            clavesAsignaturas: claveAsignatura,
            id_Asignaturas: id_Asignatura,
          },
        }
      ).exec();
      console.log(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  async existeDocente(emailBuscado) {
    try {
      const count = await Docente.countDocuments({ correo: emailBuscado });
      return count > 0;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar al docente.");
    }
  }

  async registrarUsuario(nombre, correo) {
    try {
      const nuevoDocente = await Docente.create({ nombre, correo });
      return nuevoDocente;
    } catch (error) {
      console.log(error);
      throw new Error("Error al guardar al docente.");
    }
  }
}

module.exports = docentesDAO;
