import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CompanyCarousel from "../components/CompanyCarousel";
import BlogHighlight from "../components/BlogHighlight";
import "../assets/styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <CompanyCarousel />
      <BlogHighlight />
      <Footer />
    </div>
  );
}

export default Home;
