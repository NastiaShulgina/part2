import { useState, useEffect } from 'react'
import axios from 'axios'
import NewPersonForm from './components/NewPersonForm'
import PhonesList from './components/PhonesList'
import SearchFilter from './components/SearchFilter'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newNote, setNewNote] = useState(
    {
      newName: '',
      newNumber: ''
    }
  )

  const [filteredPersons, setFilteredPersons] = useState([persons])

  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(responseData => {
        setPersons(responseData)
      })
  }, [])

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

    const filtered = persons.filter((person) => person.name.toLowerCase().includes(PATTERN))

    setFilteredPersons(filtered)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newNote.newName,
      number: newNote.newNumber
    }

    if (persons.some(person => JSON.stringify(person) === JSON.stringify(newPerson))) alert(`${newPerson.name} is already added to phonebook`)
    else {
      personService
      .create(newPerson)
      .then(responseData => {
        setPersons(persons.concat(responseData))
        setNewNote('')
      })

      axios
        .post('http://localhost:3001/persons', newPerson)
        .then(response => {
          setPersons(persons.concat(response.data))
        })

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