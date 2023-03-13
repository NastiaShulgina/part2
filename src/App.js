import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newNote, setNewNote] = useState(
    {
      newName: '',
      newNumber: ''
    }
  )

  const [filteredPersons, setFilteredPersons] = useState([persons])

  const [filter, setFilter] = useState('')

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    const PATTERN = event.target.value.toLowerCase()

    const filtered = persons.filter((person) => person.name.toLowerCase().includes(PATTERN) )

    setFilteredPersons(filtered)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = {
      id: newNote.newName,
      name: newNote.newName,
      number: newNote.newNumber
    }

    if (persons.some(person => JSON.stringify(person) === JSON.stringify(newPerson))) alert(`${newPerson.name} is already added to phonebook`)
    else {
      setPersons(persons.concat(newPerson))
      setFilter('')
    }
    setNewNote({
      newName: '',
      newNumber: ''
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
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
        {(filter === '' ? persons : filteredPersons).map(person => <div key={person.id}>{person.name} {person.number}</div>)}
      </div>
    </div>
  )
}

export default App