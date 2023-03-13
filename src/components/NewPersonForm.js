const NewPersonForm = ({ newNote, handleSubmit, handleNameChange, handleNumberChange }) => {
    return (
        <div>
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
        </div>
    );
}

export default NewPersonForm;