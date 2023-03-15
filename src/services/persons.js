import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const changeNumber = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteById = (person, persons, setPersons) => {
    if (window.confirm(`Delete ${person.name}?`)) {
        axios.delete(`${baseUrl}/${person.id}`)
        setPersons(persons.filter(element => element.id !== person.id))
    }

}

const personService = { getAll, create, changeNumber, deleteById }

export default personService