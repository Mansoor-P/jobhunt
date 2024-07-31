import "../assets/styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>
        <Link to="/">Job Hunt</Link>
      </h1>
      <nav className="nav">
        <Link to="/jobs">Job Listings</Link>
        <Link to="/about">About Us</Link>
        <button onClick={() => window.location.href = '/blogs'}>Blogs</button>
      </nav>
    </header>
  );
}

export default Header;
