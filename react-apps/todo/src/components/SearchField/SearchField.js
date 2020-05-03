import React from 'react'
import ItemStatusFilter from '../ItemStatusFilter'
import './SearchField.css'

const SearchField = () => {
    return(
        <div className="row search-div">
        <input className="search-field col-md-7" placeholder="search" />
        <ItemStatusFilter />
        </div>
    )
}

export default SearchField