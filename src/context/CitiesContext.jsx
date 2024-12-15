/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const ContextProvider = createContext();

export const CitiesProvider = function ({ children }) {
  const [loading, isLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function getCities() {
      try {
        isLoading(true);

        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();

        setCities(data);
      } catch (error) {
        console.log(error);
      } finally {
        isLoading(false);
      }
    }

    getCities();
  }, []);

  async function getCity(id) {
    try {
      isLoading(true);

      const res = await fetch(`http://localhost:9000/cities/${id}`);
      const data = await res.json();

      setCurrentCity(data);
    } catch (error) {
      console.log(error);
    } finally {
      isLoading(false);
    }
  }

  return (
    <ContextProvider.Provider
      value={{
        loading,
        cities,
        getCity,
        currentCity
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useCities = function () {
  const context = useContext(ContextProvider);
  if (context === undefined) throw new Error("Contexted is used out of scope");
  return context;
};
