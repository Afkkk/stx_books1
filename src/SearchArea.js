import React from 'react'

const SearchArea = (props) => {
    return (
        <div>
            <form onSubmit={props.searchBook} action="e">
                <input type="text" onChange={props.handleSearch} placeholder="Enter book name"/>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchArea;
