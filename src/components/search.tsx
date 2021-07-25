/** importing required files and components  */

import React from 'react'
import './search.css' /** CSS File for styling */

/** search component for search bar */

function Search({ handleInput } : any) {
    return (
        <div>
            <input type="text" placeholder="Search restaurant here" className="searchbar" onChange={handleInput} />
        </div>
    )
}

/** exporting */

export default Search
