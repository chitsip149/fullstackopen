const express = require('express')
const cors = require('cors')
const app = express() //the express function creates an express application stored in the app variable

app.use(cors())
app.use(express.static('dist'))

let notes = [
    {
        id: "1",
        content: "HTML is easy",
        important: true
      },
      {
        id: "2",
        content: "Browser can execute only JavaScript",
        important: false
      },
      {
        id: "3",
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
      }
    
]

//express.json() is a built-in middleware function in express. it parses incoming requests with json payloads and is based on body-parser
//returns middleware that only parses json and only looks at requests where the content-type header matches the type option
app.use(express.json())

// const requestLogger = (request, response, next) => {
//     console.log('Method: ', request.method)
//     console.log('Path: ', request.path)
//     console.log('Body', request.body)
//     console.log('---')
//     next()
// }

// app.use(requestLogger)

// const unkownEndpoint = (request, response) => {
//     response.status(404).send({error: 'unkown endpoint'})
// }

// app.use(unkownEndpoint)

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

//app.get('/api/notes/:id') will handle all http get requests that are of the form /api/notes/something, where something is an arbitrary string
//the id parameter in the route of a request can be accessed through the request object
app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note)
    }
    else {
        response.status(404).end()
    }
})

//if deleting the resource is successfu;, meaning that the node exists and is removed
//we respond to the request with the status code 204 no content and return no data with the response
app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})

const generateId = () => {
    const maxId = notes.length>0 
        ? Math.max(...notes.map(n=>Number(n.id)))
        : 0
    return String(maxId+1)
}

//adding a note happens by making an http post request to the address, and by sending all the info for the new note in the request body in json format
//to access the data easily, we need the help of the express json-parser that we can use with the command app.use(express.json())
//the event handler function can access the data from the body property of the request object
//without the json-parser, the body property would be undefined
//the json-parser takes the json data of a request, transforms it into a js object and then attaches it to the body property of the request object before the route handler is called
app.post('/api/notes', (request, response) => {
    const body = request.body

    if (!body.content){
        return response.status(400).json({
            error: 'content missing'
        })
    }
    const note = {
        content: body.content,
        important: Boolean(body.important) || false,
        id: generateId()
    }

    notes = notes.concat(note)

    console.log(notes)
    response.json(note)
})

//bind the http server assigned to the app variable, to listen to http requests sent to port 3001
const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)