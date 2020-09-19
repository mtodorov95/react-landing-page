import React from "react";
import Cards from "../Cards";
import HeroSection from "../HeroSection";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <Cards />
    </div>
  );
}

export default Home;
