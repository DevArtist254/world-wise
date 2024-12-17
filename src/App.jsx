import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Applayout from "./pages/Applayout";
import Cities from "./components/cities/cities";
import Countries from "./components/country/countries";
import CityItem from "./components/cities/cityItem";
import { CitiesProvider } from "./context/CitiesContext";

export default function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/app" element={<Applayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<Cities />} />
            <Route path="cities/:id" element={<CityItem />} />
            <Route path="countries" element={<Countries />} />
            <Route path="form" element={<p>Form</p>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}
