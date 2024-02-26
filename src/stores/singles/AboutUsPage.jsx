import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./aboutUs.css";

const AboutUsPage = () => {
  const developerName = "Mansoor"; 
  const graduationStatus = "MCA Graduate"; 

  return (
    <>
      <Header />
      
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h2 className="text-center mb-4">About {developerName}</h2>
            <p>
              Hi, I'm {developerName}, a {graduationStatus} with a passion for
              technology and software development. Welcome to our Job Portal, a
              project crafted with my dedication to becoming a Software Developer
              Engineer.
            </p>
            <p>
              This platform is a blend of HTML, CSS, JavaScript, and the powerful
              React.js library. Our journey doesn't end here! I have exciting
              plans for the future, including integrating REST APIs, Java as the
              backend, and databases like MongoDB and MySQL to enhance the
              functionality and scalability of the portal.
            </p>
            
            <p>
              Join me on this thrilling venture as we strive to create a seamless
              bridge between job seekers and opportunities. Together, let's shape
              the future of career exploration and growth.
            </p>
            <p className="text-center mt-4">
              <strong>Happy Exploring!</strong>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUsPage;
