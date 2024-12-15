import React from 'react'
import City from './city'
import { useCities } from '../../context/CitiesContext'

function Cities() {
  const {loading, cities} = useCities();

  if (loading) return <p>Loading....</p>

  if (!cities.length) return <p>Start your adventure here!</p>
  
  return (
    <div className='cities' >{cities.map(el => (
      <City key={el.id} data={el} />
    ))}</div>
  )
}

export default Cities