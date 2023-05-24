const Docente = require("./models/docente");

class metodosDB {
  constructor() {}
  async desplegarBD() {
    try {
      const docentes = Docente.find({});

      return docentes;
    } catch (error) {
      console.log(error);
      throw new Error("Error al buscar docentes.");
    }
  }
}

module.exports = metodosDB;
