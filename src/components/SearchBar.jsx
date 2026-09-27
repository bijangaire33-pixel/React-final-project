function SearchBar() {
  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city name"
      />

      <button className="btn btn-primary">
        Search
      </button>
    </div>
  )
}

export default SearchBar