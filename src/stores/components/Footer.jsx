import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

const Footer = () => {
  const linkCategories = [
    {
      name: "Job Portal",
      links: [
        { text: "Home", path: "/" },
        { text: "Jobs", path: "/jobs_notifications" },
      ],
    },
    {
      name: "Important links",
      links: [{ text: "About Us", path: "/about_us" }],
    },
    {
      name: "Connect Me Here",
      links: [
        { text: "LinkedIn", path: "https://www.linkedin.com/in/mansoor0731/" },
        { text: "Git Hub", path: "https://www.github.com/Mansoor-P/" },
        { text: "Twitter", path: "https://twitter.com/mansoor0731" },
      ],
    },
  ];
  return (
    <footer className="container-fluid py-5 my-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 m-2">
        <div className="col mb-3">
          <Link className="navbar-brand" to="/">
            <img
              src="assets/LOGO1.png"
              alt=""
              width={150}
              height={150}
              className="img-fluid"
            />
          </Link>
        </div>

        {/* Map through link categories */}
        {linkCategories.map((category, index) => (
          <div key={index} className="col mb-3">
            <h5>{category.name}</h5>
            <ul className="nav flex-column">
              {/* Map through links in each category */}
              {category.links.map((link, linkIndex) => (
                <li key={linkIndex} className="nav-item mb-2">
                  <a href={link.path} className="nav-link p-0 footer-links">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        
      </div>
    </footer>
  );
};

export default Footer;
