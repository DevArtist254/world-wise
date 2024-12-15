import React from "react";
import PropTypes from "prop-types";
import Country from "./country";

function Countries({ loading, cities }) {
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

Countries.propTypes = {
  loading: PropTypes.bool,
  cities: PropTypes.array,
};

export default Countries;
