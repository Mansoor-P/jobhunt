import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Carousel.css";
const Carousel = () => {
  const carouselItems = [
    {
      imagePath: "assets/images/c1.jpg",
      label: "Unlock Opportunities",
      content: "Explore, Apply, Thrive – Your Dream Job Awaits!",
    },
    {
      imagePath: "assets/images/coding.jpg",
      label: "Career Catalyst Hub",
      content: "Ignite Your Career, Propel Your Success – Discover Endless Possibilities!",
    },
    {
      imagePath: "assets/images/oneway.jpg",
      label: "Pathways to Progress",
      content: "Navigate Your Career Journey – Where Aspirations Meet Opportunities!",
    },
  ];

  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide carousel-fade"
    >
      <div className="carousel-indicators">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-inner">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`carousel-item${index === 0 ? " active" : ""}`}
            data-bs-interval={index === 0 ? 10000 : 2000}
          >
            <img
              src={item.imagePath}
              className="d-block w-100 "
              alt={`Slide ${index + 1}`}
              height={400}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>{item.label}</h5>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
