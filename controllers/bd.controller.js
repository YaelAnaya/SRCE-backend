const Docentes = require("../dao/docentesDAO");
const Docente = require("../dao/models/docente");
const AEDefinido = require("../dao/models/aeDefinido");
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

      //asignatura.guardarClase(id_Asignatura, nombreAsignatura, claveAsignatura);
      docentes.agregarAsignaturaDocente(
        userInfo.data.email,
        claveAsignatura,
        id_Asignatura
      );
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

const bdGetTree = async (req, res) => {
  const { ae } = req.body;
  try {
    const aed = await AEDefinido.find({
      idAE: { $in: ae },
    });
    res.status(200).json(aed);
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

const bdGetUserCourses = async (req, res) => {
  const { token } = req.body;
  try {
    const oAuth2Client = createOAuth2Client(token);
    const userInfo = await oAuth2Client.request({
      url: "https://www.googleapis.com/oauth2/v1/userinfo",
      method: "GET",
    });

    // Realizar la consulta a la base de datos para obtener los cursos del usuario
    const clavesAsignaturas = await Docente.find(
      { correo: userInfo.data.email },
      { clavesAsignaturas: 1 },
      { id_Asignaturas: 1 }
    );

    const cursos = await asignatura.obtenerAsignaturas(clavesAsignaturas);

    // Enviar la respuesta con los cursos encontrados
    res.status(200).json(cursos);
  } catch (error) {
    // Manejo de errores en caso de que ocurra algún problema durante la consulta
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los cursos del usuario." });
  }
};

const getTareasCurso = async (req, res) => {
  const { token } = req.body;
  try {
    const oAuth2Client = createOAuth2Client(token);
    const userInfo = await oAuth2Client.request({
      url: "https://www.googleapis.com/oauth2/v1/userinfo",
      method: "GET",
    });

    const docenteAux = await Docente.findOne({ correo: userInfo.data.email });
    const id_Asignaturas = docenteAux.id_Asignaturas;
    res.status(200).json(id_Asignaturas);
  } catch (error) {
    // Manejo de errores en caso de que ocurra algún problema durante la consulta
    console.error(error);
    res
      .status(500)
      .json({ message: "Error al obtener los cursos del usuario." });
  }
};

module.exports = {
  bdSaveClass,
  buscarDocente,
  bdGetUserCourses,
  bdGetTree,
  getTareasCurso,
};
