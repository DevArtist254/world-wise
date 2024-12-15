import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Applayout from "./pages/Applayout";
import { useEffect, useState } from "react";
import Cities from "./components/cities/cities";
import Countries from "./components/country/countries";
import CityItem from "./components/cities/cityItem";


export default function App() {
  const [loading, isLoading] = useState(false);
  const [cities, setCities] =useState([]);

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
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<Applayout />}>
          <Route index element={<Navigate replace to="cities"/>} />
          <Route
            path="cities"
            element={<Cities cities={cities} loading={loading} />}
          />
          <Route path="cities/:id" element={<CityItem />} />
          <Route
            path="countries"
            element={<Countries cities={cities} loading={loading} />}
          />
          <Route path="countries" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}