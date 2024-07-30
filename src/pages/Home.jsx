import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";
import Hero from "../components/Hero";
import CompanyCarousel from "../components/CompanyCarousel";
import BlogHighlight from "../components/BlogHighlight";

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero/>
      <CompanyCarousel/>
      <BlogHighlight/>
      <Footer />
    </div>
  );
}

export default Home;
