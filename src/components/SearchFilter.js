const SearchFilter = ({filter, handleFilterChange}) => {
    return (
        <div>
            <h2>Phonebook</h2>
            <div>
                filter shown with: <input value={filter} onChange={handleFilterChange} />
            </div>
        </div>
    );
}

export default SearchFilter;