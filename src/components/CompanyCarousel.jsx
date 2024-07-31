import "../assets/styles/CompanyCarousel.css";
import companies from "../assets/images/companies";

const CompanyCarousel = () => {
  return (
    <div className="container carousel">
      <h4>Find job postings in top companies like</h4>
      <div className="carousel-container">
        {companies.map((company, index) => (
          <div className="company-logo" key={index}>
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyCarousel;
