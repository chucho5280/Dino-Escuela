const express = require("express")
const estudianteRuta = express.Router()

//Declaramos un objeto de nuestro modelo//
let Estudiante = require('../models/Estudiante')

//Agregar un nuevo Estudiante//
estudianteRuta.route('/create').post((req,res)=>{
    Estudiante.create(req.body)
    .then((data)=>{
        console.log('se inserto un registro')
        res.send(data)
    })
    .catch((err)=>{
        console.error.apply(err)
    })
})

//Obtenemos todos los estudiantes//
estudianteRuta.route('/estudiantes').get((req,res)=>{
    Estudiante.find()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Obtenemos un solo estudiante por su id//
estudianteRuta.route('/estudiante/:id').get((req,res)=>{
    Estudiante.findById(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Actualizar un estudiante//
estudianteRuta.route('/update/:id').put((req,res)=>{
    Estudiante.findByIdAndUpdate(req.params.id,{
        $set:req.body
    })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

//Metodo para eliminar estudiante//
estudianteRuta.route('/delete/:id').delete((req,res)=>{
    Estudiante.findByIdAndRemove(req.params.id)
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.error(err)
    })
})

module.exports =estudianteRuta;
