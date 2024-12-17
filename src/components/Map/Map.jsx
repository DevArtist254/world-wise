/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../../context/CitiesContext";
import { useGeolocation } from "../../hooks/useGeolocation";

function Map() {
  const [mapPosition, setMapPosition] = useState([51.505, -0.09]);
  const {
    isLoading: isLoadingPosition,
    position: getLocationPosition,
    getPosition,
  } = useGeolocation();
  const [search] = useSearchParams();
  const { cities } = useCities();

  const lat = search.get("lat") || mapPosition[0];
  const lng = search.get("lng") || mapPosition[1];

  useEffect(
    function () {
      setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  useEffect(
    function () {
      if (getLocationPosition)
        setMapPosition([getLocationPosition.lat, getLocationPosition.lng]);
    },
    [getLocationPosition]
  );

  return (
    <div className="map">
      {!getLocationPosition && (
        <button onClick={getPosition}>
          {isLoadingPosition ? "Loading...." : "Use your position"}
        </button>
      )}
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
        <DetectClick />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const nav = useNavigate();

  useMapEvents({
    click: (e) => nav(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
