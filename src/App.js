import { useState, useEffect } from 'react'
import NewPersonForm from './components/NewPersonForm'
import PhonesList from './components/PhonesList'
import SearchFilter from './components/SearchFilter'
import personService from './services/persons'
import SuccessMessage from './components/SuccessMessage'
import FailureMessage from './components/FailureMessage'

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

  const [successMessage, setSuccessMessage] = useState('')
  const [failureMessage, setFailureMessage] = useState('')

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

  const handleNumberUpdate = (id, newObject) => {
    personService
      .changeNumber(id, newObject)
      .then(updatedPerson => {
        setPersons(persons.map(person => (person.id !== updatedPerson.id && person) || updatedPerson))
        setSuccessMessage(`Updated ${updatedPerson.name}'s number!`)
        setTimeout(() => setSuccessMessage(null), 5000)
      })
      .catch(err => {
        if (err.response.status === 404) {
          setFailureMessage(`Information of ${newObject.name} has already been removed from the server!`)
          setTimeout(() => setFailureMessage(null), 5000)
        }
      })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = {
      name: newNote.newName,
      number: newNote.newNumber
    }

    if (persons.some(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name)
      && JSON.stringify(person.number) === JSON.stringify(newPerson.number))) {
      alert(`${newPerson.name} is already added to phonebook`)
    } else if (persons.some(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name))) {
      const samePerson = persons.find(person => JSON.stringify(person.name) === JSON.stringify(newPerson.name) ? person : null)
      window.confirm(`${newPerson.name} is already added to phonebook, replace the old number with a new one?`)
        && handleNumberUpdate(samePerson.id, newPerson)
    } else {
      personService
        .create(newPerson)
        .then(responseData => {
          setPersons(persons.concat(responseData))
          setNewNote('')
          setSuccessMessage(`Added ${newPerson.name}!`)
          setTimeout(() => setSuccessMessage(null), 5000)
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
      {failureMessage && <FailureMessage message={failureMessage} />}
      {successMessage && <SuccessMessage message={successMessage} />}
      <SearchFilter filter={filter} handleFilterChange={handleFilterChange} />
      <NewPersonForm newNote={newNote} handleSubmit={handleSubmit} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />
      <PhonesList filter={filter} persons={persons} setPersons={setPersons} filteredPersons={filteredPersons} />
    </div>
  )
}

export default App