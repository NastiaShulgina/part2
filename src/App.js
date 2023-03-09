import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 'Arto Hellas',
      name: 'Arto Hellas',
      number: '+380937003004'
    }
  ])
  // const [newName, setNewName] = useState('')
  // const [newNumber, setNewNumber] = useState('')

  const [newNote, setNewNote] = useState(
    {
      newName: '',
      newNumber: ''
    }
  )

  const handleNameChange = (event) => {
    setNewNote({
      ...newNote,
      newName: event.target.value
    })
  }

  const handleNumberChange = (event) => {
    setNewNote({
      ...newNote,
      newNumber: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = {
      id: newNote.newName,
      name: newNote.newName,
      number: newNote.newNumber
    }

    if (persons.some(person => JSON.stringify(person) === JSON.stringify(newPerson))) alert(`${newPerson.name} is already added to phonebook`)
    else setPersons(persons.concat(newPerson))
    setNewNote({
      newName: '',
      newNumber: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newNote.newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNote.newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <div key={person.id}>{person.name} {person.number}</div>)}
      </div>
    </div>
  )
}

export default App