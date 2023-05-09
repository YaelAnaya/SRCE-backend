const Docente= require('./models/docente')

class docentesDAO {
    constructor(){}
    async desplegarDocentes(){
        try {
            const docentes= Docente.find({})
            return docentes
        } catch (error) {
            console.log(error)
            throw new Error('Error al buscar docentes.')
        }
    }
}

module.exports=docentesDAO