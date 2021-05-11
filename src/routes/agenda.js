import express from 'express'
import {alumno} from '../utils/mockup'
import MongoLib from '../lib/mongo'

const mongo = new MongoLib()

const router = express.Router()

const router = require('express').Router()
router.get('/', async (_, response) => {
    await mongo.create('alumno', {
        alumno: 'Hola'
    })
    response.json(alumno)
})

router.get('/info', (_, response) => {
    const cantidad = alumno.length
    response.send('<h1>Hay ' + cantidad + ' personas en la agenda</h1>')
})


router.get('/info/:id', (request, response) => {
    const id = request.params.id
    const note = alumno.find(alumno => alumno.id === id)
    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }
})

router.get('/api/alumnos/:id', (request, response) => {
    const id = request.params.id
    console.log(id)
    const alumnos = alumno.find(alumno => alumno.id === id)
    console.log(alumno)
    response.json(alumnos)
  })

  router.delete('/user/:id', (request, response) => {
    const id = Number(request.params.id)
    
    notes = alumno.filter(alumno => alumno.id !== id)
    
    response.status(204).end()
  })
  export default router