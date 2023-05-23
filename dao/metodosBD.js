const Docente= require('./models/docente')
const Asignatura= require('./models/asignatura')
const AE= require('./models/atributoDeEgreso')
const CD= require('./models/criterioDeDesempeño')
const Indicador= require('./models/indicador')

class metodosDB {
    constructor(){}
    async desplegarBD(){
        try {
            const docentes= Docente.find({})
            
            

            return docentes
        } catch (error) {
            console.log(error)
            throw new Error('Error al buscar docentes.')
        }
    }
}

module.exports=metodosDB