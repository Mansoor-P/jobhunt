import Footer from "../Footer";
import Header from "../Header";
import "../../assets/styles/InfoStyles.css"; // Ensure this file includes relevant styles for About page

function About() {
  return (
    <>
      <Header />
      <div className="container about-container my-5">
        <h1 className="text-center mb-4">About Us</h1>

        <section className="mb-4">
          <h2>Welcome to Job Hunt</h2>
          <p>
            <strong>Job Hunt</strong> is dedicated to connecting talented
            individuals with the best job opportunities across various
            industries. Our platform offers a seamless and user-friendly
            experience for both job seekers and employers.
          </p>
        </section>

        <section className="mb-4">
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower job seekers by providing them with access
            to a wide range of job listings and resources to enhance their
            careers. We aim to support employers in finding the right talent to
            drive their businesses forward.
          </p>
        </section>

        <section className="mb-4">
          <h2>Our Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We are committed to providing honest and transparent services.</li>
            <li><strong>Innovation:</strong> We continuously strive to improve our platform and services.</li>
            <li><strong>Customer Focus:</strong> We prioritize the needs and feedback of our users to enhance their experience.</li>
          </ul>
        </section>

        <section className="mb-4">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals who are passionate
            about helping people find their ideal jobs and assisting employers
            in building strong teams. We bring expertise in technology,
            recruitment, and customer service to deliver a top-notch experience.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            We value your feedback and are here to help. If you have any
            questions, suggestions, or need support, please feel free to reach
            out to us at{" "}
            <a href="mailto:munaf6007@gmail.com" className="link-primary">munaf6007@gmail.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
