const http = require('http')
const express = require('express')
const { response } = require('express')
const app = express()
app.use(express.json())

let alumno = [
    {id: '1', nombre: 'Fernandez', numero: '78458482159'},
    {id: '2',nombre: 'Pedro', numero: '48579856485315'},
    {id: '3',nombre: 'Anthonio', numero: '5899486523'},
    {id: '4',nombre: 'Jhoshi', numero: '47851285632'},
    {id: '5',nombre: 'Homercules', numero: '5558496553'},
    {id: '6',nombre: 'Morshi', numero: '99854889561523'}
]
app.get('/', (request, response) => {
    response.json(alumno)
})

app.get('/info', (request, response) => {
    const cantidad = alumno.length
    response.send('<h1>Hay ' + cantidad + ' personas en la agenda</h1>')
})


app.get('/info/:id', (request, response) => {
    const id = request.params.id
    const note = alumno.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

app.get('/api/alumnos/:id', (request, response) => {
    const id = request.params.id
    console.log(id)
    const alumnos = alumno.find(alumno => alumno.id === id)
    console.log(alumno)
    response.json(alumnos)
  })

  app.delete('/user/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = alumno.filter(alumno => alumno.id !== id)
  
    response.status(204).end()
  })

  

  //app.insert('/api/alumnos', (request, response) => {
    //const alumno = {
      //  id:Math.round(Math.random()*10000),
        //nombre: req.body.nombre,
        //numero: req.body.numero,

    //};
    //console.log(alumno)
  
 //   response.json(alumnos)
  //})

  app.use((request,reponse,next)=>{
    response.status(404).send('<h1>Pagina no encontrada</h1>');
  })

 // app.post('/api/alumnos', (request, response) => {
   // const body = request.body
  
    //if (!body.content) {
      //return response.status(400).json({ 
        //error: 'error el nombre o numero ya existe' 
      //})
     
    //}

  
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})