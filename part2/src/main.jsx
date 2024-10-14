import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'

import App from './App'

// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only JavaScript',
//     important: false
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App notes={notes} />
// )

//a promise is an object representing the eventual completion or failure of an asynchronous operation
//a promise can have 3 distinct states:
// - pending
// - fulfilled
// - rejected

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)
// promise.then(response => {
//   console.log(response)
//   const notes = response.data
//   console.log(notes)
// })

axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log(notes)
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)

// const result = notes.map(note => note.id)
// console.log(result)