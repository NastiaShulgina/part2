const SearchFilter = ({ filter, handleFilterChange }) => {
    return (
        <span>
            : <input value={filter} onChange={handleFilterChange} />
        </span>
    );
}

export default SearchFilter;