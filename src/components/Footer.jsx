import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="container footer">
      <div className="footer-section company-info">
        <h1>Job Hunt</h1>
        <p>
          Our platform allows users to effortlessly search for job opportunities
          across various industries and locations.
        </p>
        <div className="social_icons">
          <a href="">
            <i className="bi bi-github"></i>
            Github
          </a>
          <a href="">
            <i className="bi bi-linkedin"></i>
            LinkedIn
          </a>
          <a href="">
            <i className="bi bi-twitter"></i>
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-section links">
        <h4>Links</h4>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-section important-links">
        <h4>Important Links</h4>
        <ul>
          <li>
            <a href="/privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="/terms">Terms of Service</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
        </ul>
      </div>
      <div className="footer-section newsletter">
        <h4>News Letter</h4>
        <p>Subscribe Here Our Blogs will directly comes to your mail</p>
        <form>
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>
      </div>
      <div className="footer-last">
        <p>&copy; 2024 Jobhunt. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
