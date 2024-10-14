import { useState } from 'react'
import Note from './components/Note'

// const Note = ({note}) => {
//   return (
//     <li key={note.id}>{note.content}</li>
//   )
// }

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

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
      id: String(notes.length+1),
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const noteToShow = showAll?notes:notes.filter(note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll?'important':'all'}
        </button>
      </div>
      <ul>
        {noteToShow.map(note => <Note key={note.id} note={note} />)}
      </ul>
      <form onSubmit={addNotes}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button> 
      </form>
    </div>
  )
}

export default App