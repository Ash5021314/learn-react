import React from 'react'
import './search-panel.css';
const SearchPaannel = () => {
  const searchtext = 'Type here to search';
  const serachStyle = {
    fontSize: '20px'
  }
  return (
    <input className="form-control search-input" style={serachStyle} placeholder={searchtext} />
  )
}
export default SearchPaannel;