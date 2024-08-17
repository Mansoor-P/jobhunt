import React from "react";
import companies from "../assets/images/companies"; // Ensure this path is correct
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/styles/CompanyCarousel.css";

const CompanyCarousel = () => {
  return (
    <div className="carousel-section py-5">
      <div className="container">
        <h5 className="text-center  mb-4">
          Find job postings in top companies like
        </h5>
        <div className="carousel-container">
          {companies.map((company, index) => (
            <div
              className="company-logo d-flex align-items-center justify-content-center p-3"
              key={index}
            >
              <img
                src={company.logo}
                alt={company.name}
                className="img-fluid"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
