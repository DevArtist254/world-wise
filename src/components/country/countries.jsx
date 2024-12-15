import React from "react";
import Country from "./country";
import { useCities } from "../../context/CitiesContext";

function Countries() {
  const { loading, cities } = useCities();
  if (loading) return <p>Loading....</p>;

  if (!cities.length) return <p>Start your adventure here!</p>;

  const countries = cities.reduce((arr, city) => {

    const hasCountry = arr.map(el => el.country).includes(city.country);

    if(!hasCountry) 
        return [...arr, { id : city.id, country: city.country, emoji: city.emoji}] 
     else 
        return arr;
  }, [])

  return (
    <div className="countries">
      {countries.map((el) => (
        <Country key={el.id} data={el} />
      ))}
    </div>
  );
}

export default Countries;
