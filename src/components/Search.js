import React from 'react'

const Search = props => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => props.filter(e.target.value)} className="prompt"/>
        <i className="search icon" />
      </div>
    </div>
  )
}

export default Search
