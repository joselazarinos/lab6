import express from 'express';
import apiAgenda from './routes/agenda'


const app = express()
app.use(express.json())

app.use('/', apiAgenda)



  

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