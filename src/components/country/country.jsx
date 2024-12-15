import React from "react";
import PropTypes from "prop-types";


function Country({ data }) {
  return (
    <div className="city">
      <i className="city__emoji">{data.emoji}</i>
      <p className="city__name">{data.country}</p>
    </div>
  );
}

Country.propTypes = {
  data: PropTypes.object,
};

export default Country;
