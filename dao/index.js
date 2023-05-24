const mongoose = require('mongoose')
const DocenteDAO= require('./docentesDAO')
const MetodosDB = require('./metodosBD')

const server='mongodb+srv://is_srce:ZuGxISIwyHaFsp6j@cluster0.cgxebee.mongodb.net/'
const database='is_srce'

class Database{
  constructor(){
    this._connect()
    this.docenteDAO= new DocenteDAO()
    this.metodosDB= new MetodosDB()
  }

  _connect(){
    mongoose
      .connect(server+database)
      .then(()=>{
        console.log('Conexion correcta')
      })
      .catch((error)=>{
        console.log('Error al conectar a la DB: '+ error)
      })
  }
}

module.exports=Database
