import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/Home.css";

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <h2>Welcome to the Job Portal</h2>
        <p>Find your dream job with ease and convenience.</p>
        <section className="left"></section>
        <section className="right"></section>
        <aside>side</aside>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
