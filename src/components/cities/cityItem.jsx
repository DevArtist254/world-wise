import React from 'react'
import { useParams } from 'react-router-dom'

function CityItem() {
  const {id} = useParams();
  return (
    <div>CityItem {id}</div>
  )
}

export default CityItem