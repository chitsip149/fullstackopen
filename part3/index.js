// console.log('hello world')

const http = require('http') // the application imports node's built-in web server module

//the code uses the createServer method of the http module to create a new web server
//an event handler is registered to the server that is called everytimr an http request is made to
//the server address http://localhost:3001

//the request is responded to with the status code 200, with the Content-Type header set to text/plain
//and the content of the site to be set to hello world

const app = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'})
    response.end("Hello World")
})

//bind the http server assigned to the app variable, to listen to http requests sent to port 3001
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)