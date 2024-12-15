import React from 'react'
import PropTypes from 'prop-types'
import City from './city'

function Cities({loading, cities}) {

  if (loading) return <p>Loading....</p>

  if (!cities.length) return <p>Start your adventure here!</p>
  
  return (
    <div className='cities' >{cities.map(el => (
      <City key={el.id} data={el} />
    ))}</div>
  )
}

Cities.propTypes = {
  loading: PropTypes.bool,
  cities: PropTypes.array
}

export default Cities