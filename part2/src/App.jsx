import { useState } from 'react'
import Note from './components/Note'

const App = ({notes}) => {
  const [newNum, setNewNum] = useState("")
  const [newNotes, setNewNotes] = useState(notes)
  const [sum, setSum] = useState(0)

  const typeNewNum = (event) => {
    console.log(event.target.value)
    setNewNum((event.target.value).toString())
  }

  const isInteger = (value) => {
    if (parseInt(value, 10).toString()===value) return true
    return false
  }

  const clickButton = (event) => {
    event.preventDefault()
    console.log('click', event.target)
    try {
      if (isInteger(newNum)) {
        console.log('this is a number')
        const newNote = {
          number: Number.parseInt(newNum),
          id: newNotes.length+1
        }
        setSum(sum+newNote.number)
        setNewNotes(newNotes.concat(newNote))
        setNewNum('')
      }
      else {
        throw new Error(`${newNum} is not a number`)
      }
    }
    catch (error){
      console.error('catch exception', error)
      alert('Please enter only number!')
    }
  }

  return (
    <>
      <h1>This is a sum calculator</h1>
      <ul>
        {newNotes.map(note => <li key={note.id}>{note.number}</li>)}
      </ul>
      <div>Current sum: {sum}</div>
      <form onSubmit={clickButton}>
        <input value={newNum} placeholder='Enter a number...' onChange={typeNewNum} />
        <button type='submit'>submit</button>
      </form>

    </>
  )
}

export default App
