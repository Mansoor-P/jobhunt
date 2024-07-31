import "../../assets/styles/InfoStyles.css";
import Footer from "../Footer";
import Header from "../Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          We are here to help you with any questions or concerns you may have.
          Feel free to reach out to us through the following contact
          information.
        </p>

        <div className="contact-info">
          <h2>Our Address</h2>
          <p>
            Jobhunt <br />
            Banglore, Karnataka, India
          </p>

          <h2>Email Us</h2>
          <p>
            For support or inquiries, please email us at:{" "}
            <a href="mailto:munaf6007@gmail.com">munaf6007@gmail.com</a>
          </p>

          <h2>Follow Us</h2>
          <p>
            Stay connected with us on social media:
            <br />
            <a
              href="https://www.github.com/Mansoor-P"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{" | "}
            <a
              href="https://www.linkedin.com/in/mansoor0731"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" | "}
            <a
              href="https://mansoorsportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
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
