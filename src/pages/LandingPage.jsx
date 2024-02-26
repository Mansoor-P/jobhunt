import React from "react";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/Carousel";
import Add from "../components/Add/Add";
import Footer from "../components/footer/Footer";
import Jobs from "../components/jobs/Jobs";

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
