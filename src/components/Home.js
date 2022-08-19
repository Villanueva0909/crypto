import React from "react";
import Featured from "./Featured";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Signup from "./Signup";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
      <Outlet />
    </>
  );
}

export default App;
