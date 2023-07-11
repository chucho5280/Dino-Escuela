const mongoose =require ('mongoose')
const Schema = mongoose.Schema
let Estudiante =new Schema({
    nombre: {type:String},
    carrera:{type:String},
    email:{type:String},
    usuario:{type:Number}
},{
    collectionn: 'estudiantes'
})


module.exports = mongoose.model('Estudiante',Estudiante)


