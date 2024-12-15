/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom'
import { useCities } from '../../context/CitiesContext';

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const [search] = useSearchParams();
  const {cities} = useCities();

  const lat = search.get("lat") || mapPosition[0];
  const lng = search.get("lng") || mapPosition[1];
  
  useEffect(
    function () {
      setMapPosition([lat, lng]);
    },
    [lat, lng]
  );


 
  return (
    <div className="map">
      <MapContainer
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>
              {city.emoji} {city.cityName}
            </Popup>
          </Marker>
        ))}

        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map