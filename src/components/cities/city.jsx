import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function City({ data }) {
  return (
    <Link className="city" to={`${data.id}?lat=${data.position.lat}&lng=${data.position.lng}`}>
        <i className="city__emoji">{data.emoji}</i>
        <p className="city__name">{data.cityName}</p>
        <p className="city__date">({formatDate(data.date)})</p>
        <div className="city__closeBtn">x</div>
    </Link>
  );
}

City.propTypes = {
  data: PropTypes.object,
};

export default City;
