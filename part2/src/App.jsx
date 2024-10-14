import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'
import noteService from './services/notes'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }
  useEffect(hook, [])

  const handleNoteChange = (event) => { //every time a change occurs in the input element, the event handler function receives the event object as its event parameter
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const addNotes = (event) => {
    event.preventDefault() //the default action will make the page refresh
    console.log('button clicked', event.target)
    const noteObject = {
      content: newNote,
      important: Math.random()<0.5,
      // id: String(notes.length+1),
    }
    

    //we omit the id since it's better to let the server generate ids for our resources
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')  
      })
  }

  const noteToShow = showAll?notes:notes.filter(note => note.important)
  
  const toggleImportanceOf = (id) => {
    console.log(`importance of ${id} needs to be toggled`)
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id ===id ? returnedNote : note))
      })
  }
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)} />)}
      </ul>
      <form onSubmit={addNotes}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button> 
      </form>
    </div>
  )
}

export default App