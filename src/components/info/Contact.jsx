import Footer from "../Footer";
import Header from "../Header";
import "../../assets/styles/InfoStyles.css"; // Ensure this file includes relevant styles for Contact page

function Contact() {
  return (
    <>
      <Header />
      <div className="container contact-container my-5">
        <h1 className="text-center mb-4">Contact Us</h1>
        <p className="mb-4">
          We are here to help you with any questions or concerns you may have.
          Feel free to reach out to us through the following contact information.
        </p>

        <div className="contact-info bg-light p-4 rounded">
          <h2>Our Address</h2>
          <p>
            Job Hunt <br />
            Bangalore, Karnataka, India
          </p>

          <h2>Email Us</h2>
          <p>
            For support or inquiries, please email us at:{" "}
            <a href="mailto:munaf6007@gmail.com" className="link-primary">munaf6007@gmail.com</a>
          </p>

          <h2>Follow Us</h2>
          <p>
            Stay connected with us on social media:
            <br />
            <a
              href="https://www.github.com/Mansoor-P"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              GitHub
            </a>{" | "}
            <a
              href="https://www.linkedin.com/in/mansoor0731"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              LinkedIn
            </a>{" | "}
            <a
              href="https://mansoorsportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-primary"
            >
              Portfolio
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
