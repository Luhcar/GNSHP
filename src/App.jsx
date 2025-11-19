import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import About from "./pages/About";

import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
import Contacts from "./pages/Contacts";
import SingleProduct from "./pages/SingleProduct";
import CategoryProduct from "./pages/CategoryProduct";

function App() {
  const [location, setLocation] = useState();
  const [dropDown, setDropDown] = useState(false);

  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log(latitude, longitude);

      const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
      try {
        const location = await axios.get(url);
        const exactLocation = location.data.address;
        setLocation(exactLocation);
        // console.log(location);
        setDropDown(false);
        // console.log(exactLocation);
      } catch (error) {
        console.log(error);
      }
    });
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar location={location} getLocation={getLocation} dropDown={dropDown} setDropDown={setDropDown} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Product />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:category" element={<CategoryProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contacts />}></Route>
        <Route path="/cart" element={<Cart location={location} getLocation={getLocation}/>}></Route>
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
