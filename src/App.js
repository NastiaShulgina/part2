import { useState } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PhonesList from './components/PhonesList'
import SearchFilter from './components/SearchFilter'

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
      <SearchFilter filter={filter} handleFilterChange={handleFilterChange} />
      <NewPersonForm newNote={newNote} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <PhonesList filter={filter} persons={persons} filteredPersons={filteredPersons} />
    </div>
  )
}

export default App