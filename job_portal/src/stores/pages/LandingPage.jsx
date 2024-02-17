import React from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Add from "../components/Add";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Carousel />
      <Add />
      <Jobs />
      <Footer />
    </>
  );
};
export default LandingPage;
