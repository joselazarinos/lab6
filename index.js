const http = require('http')
const express = require('express')
const app = express()
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
const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})