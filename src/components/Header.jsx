import React from 'react'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Weather Dashboard</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <SearchBar />
        </div>
      </div>
    </div>
  )
}

export default Header