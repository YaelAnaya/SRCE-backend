const Docentes = require("../dao/docentesDAO");
const Asignatura = require("../dao/asignaturasDAO");
const { createOAuth2Client } = require("../adpters/Auth");
const docentes = new Docentes();
const asignatura = new Asignatura();
const bdSaveClass = async (req, res) => {
  const { id_Asignatura, nombreAsignatura, claveAsignatura, token } = req.body;
  try {
    const existeAsignatura = await asignatura.existeAsignatura(id_Asignatura);
    if (!existeAsignatura > 0) {
      const oAuth2Client = createOAuth2Client(token);
      const userInfo = await oAuth2Client.request({
        url: "https://www.googleapis.com/oauth2/v1/userinfo",
        method: "GET",
      });

      console.log(userInfo.data.email);

      asignatura.guardarClase(id_Asignatura, nombreAsignatura, claveAsignatura);
      docentes.agregarAsignaturaDocente(userInfo.data.email, claveAsignatura);
      res.status(200).send({ message: "Curso guardado correctamente" });
    } else {
      res.status(200).send({ message: "Curso ya guardado." });
    }
  } catch (error) {
    console.log(error);
  }
  try {
  } catch (error) {
    console.log(error);
  }
};

const buscarDocente = async (req, res) => {
  const { nombre, emailBuscado } = req.body;
  try {
    const existeDocente = await docentes.existeDocente(emailBuscado);
    if (!existeDocente > 0) {
      docentes.registrarUsuario(nombre, emailBuscado);
      console.log("Registrando Usuario");
    } else {
      console.log("El usuario ya existe");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error al buscar el docente" });
  }
};

module.exports = {
  bdSaveClass,
  buscarDocente,
};
