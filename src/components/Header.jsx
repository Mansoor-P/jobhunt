import "../assets/styles/Header.css";

function Header() {
  return (
    <header className="container header">
      <h1>Jobhunt</h1>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/jobs">Job Listings</a>
        <a href="/about">About Us</a>
        <button>Blogs</button>
      </nav>
    </header>
  );
}

export default Header;
