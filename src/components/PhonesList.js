import personService from '../services/persons'

const PhonesList = ({ filter, persons, setPersons, filteredPersons }) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                {(filter === '' ? persons : filteredPersons).map(person => (
                    <div key={person.id}>
                        <span>{person.name} {person.number} </span>
                        <button onClick={() => personService.deleteById(person, persons, setPersons)}>delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PhonesList;