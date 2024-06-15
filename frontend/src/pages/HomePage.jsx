import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import PropertyListings from "../components/PropertyListings";

const HomePage = ({userToken}) => {
  return (
    <>
      <Hero />
      <HomeCards />
      <PropertyListings userToken={userToken}/>
    </>
  );
};

export default HomePage;
