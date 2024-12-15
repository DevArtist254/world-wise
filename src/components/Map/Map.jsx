import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Map() {
  const [search, setSearch] = useSearchParams();
  const lat = search.get('lat');
  const lng = search.get("lng"); 
 
  return (
    <div className='map'>
      <h1>Map</h1>
      <p>{lat}</p>
      <p>{lng}</p>
    </div>
  )
}

export default Map