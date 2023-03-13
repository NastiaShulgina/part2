const PhonesList = ({filter, persons, filteredPersons}) => {
    return (
        <div>
            <h2>Numbers</h2>
            <div>
                {(filter === '' ? persons : filteredPersons).map(person => <div key={person.id}>{person.name} {person.number}</div>)}
            </div>
        </div>
    );
}

export default PhonesList;