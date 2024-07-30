import "../assets/styles/Hero.css";
const Hero = () => {
  return (
    <section className="container hero">
      <div className="left">
        <div className="hero-add">
          <p className="new">New</p>
          <p>Explore our latest job listings and career resources.</p>
        </div>
        <h1>
          Find Your Job & <br /> Make sure goal
        </h1>
        <p>
          Discover exciting opportunities and achieve your career goals with
          ease
        </p>
        <div className="hero-search">
          <div className="input-wrapper">
            <i className="bi bi-search"></i>
            <input type="text" placeholder="Job Title Keyword" />
          </div>
          <button>Search</button>
        </div>
      </div>
      <div className="right">
        <img
          className="heroimage"
          src="src/assets/images/heroimg.png"
          alt="Hero Image"
        />
      </div>
    </section>
  );
};

export default Hero;
