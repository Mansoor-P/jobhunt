import "../assets/styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1>Job Portal</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/jobs">Job Listings</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
