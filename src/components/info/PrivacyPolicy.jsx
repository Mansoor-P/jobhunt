import Footer from "../Footer";
import Header from "../Header";
import "../../assets/styles/InfoStyles.css"; // Ensure this file includes relevant styles for Privacy Policy page

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="container privacy-policy-container my-5">
        <h1 className="text-center mb-4">Privacy Policy</h1>
        <section className="mb-4">
          <h2>1. Introduction</h2>
          <p>
            Welcome to <strong>Job Hunt</strong>. We are committed to protecting
            your privacy and ensuring that your personal information is handled
            in a safe and responsible manner. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you
            visit our website <strong>jobhunt.netlify</strong>.
          </p>
        </section>

        <section className="mb-4">
          <h2>2. Information We Do Not Collect</h2>
          <p>
            We do not collect any personal data from users. We do not ask for or
            store sensitive information such as Social Security numbers, credit
            card details, or other personal identifiers.
          </p>
        </section>

        <section className="mb-4">
          <h2>5. Data Security</h2>
          <p>
            While we do not collect personal data, we take reasonable measures
            to protect the information collected through our website from
            unauthorized access and use.
          </p>
        </section>

        <section className="mb-4">
          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated effective date. Please
            review this policy periodically for any updates.
          </p>
        </section>

        <section>
          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at{" "}
            <a href="mailto:munaf6007@gmail.com" className="link-primary">munaf6007@gmail.com</a>.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
