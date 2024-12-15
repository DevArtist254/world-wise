import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useCities } from '../../context/CitiesContext';

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem() {
  const {id} = useParams();
  const {getCity, currentCity, loading} = useCities();
  const nav = useNavigate();

  useEffect(function () {
    getCity(id)
    console.log();
  }, [id])

  if (loading) return <h1>Loading....</h1>

  return (
    <div>
      <h1><strong>Cityname:</strong> {currentCity.cityName}</h1>
      <h2><strong>Country:</strong>{currentCity.country} {currentCity.emoji}</h2>
      {/* <p><strong>Date visited:</strong>{formatDate(currentCity.date)}</p> */}
      <p><strong>Notes:</strong>{currentCity.notes}</p>
      <button onClick={() => nav(-1)}>back</button>
    </div>
  );
}

export default CityItem