const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const path=require('path')

//conexión con la base de datos
//mongoose.connect('mongodb://127.0.0.1:27017/estudiantes')
mongoose.connect('mongodb+srv://jesusalberto:1234567890@cluster0.kcjnzdv.mongodb.net/?retryWrites=true&w=majority')
.then((x)=>{
    console.log(`Conectado exitosamente a la base de datos: "${x.connections[0].name}"`)
})
.catch((err)=>{
    console.log('Error al conectarse a Mongo', err.reason)
})

//configuración del servidor web
const estudianteRuta=require('./routes/estudiante.route')
const app=express()

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
)

app.use(cors())
app.use(express.static(path.join(__dirname, 'dist/estudiantes')))
app.use('/', express.static(path.join(__dirname, 'dist/estudiantes')))
app.use('/api', estudianteRuta)

//habilitar el puerto
const port=process.env.PORT || 4000
const server=app.listen(port, ()=>{
    console.log('Conectado al puerto '+port)
})

//manejador de error 404
app.use((req,res,next)=>{
    next(createError(404))
})

//manejador de errores
app.use(function(err,req,res,next) {
    console.log(err.message)
    if(!err.statusCode) err.statusCode=500
    res.status(err.statusCode).send(err.message)
})
