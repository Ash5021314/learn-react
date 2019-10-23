import React from 'react'
const SearchPaannel = () => {
  const searchtext = 'Type here to search';
  const serachStyle = {
    fontSize: '20px'
  }
  return (
    <input style={serachStyle} placeholder={searchtext} />
  )
}
export default SearchPaannel;