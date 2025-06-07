import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Herosection from "./components/Herosection";
import Products from "./components/Products";
import Services from "./components/Services";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div >
      {/* Fixed Navbar at top */}
      <Navbar />

      {/* Fixed Sidebar at left */}
      <Leftbar />

      {/* Content shifted down and right to make space for fixed Navbar and Sidebar */}
      <div className="pt-20 pl-44">
        <main >
          <Routes>
            <Route path="/" element={<Herosection />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
          <div>
            <Contact />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
