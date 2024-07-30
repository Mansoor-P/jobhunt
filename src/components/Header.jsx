import "../assets/styles/Header.css";

function Header() {
  return (
    <header className=" header">
      <h1>
        <a href="/">Job hunt</a>
      </h1>
      <nav className="nav">
        <a href="/jobs">JobListings</a>
        <a href="/about">AboutUs</a>
        <button>Blogs</button>
      </nav>
    </header>
  );
}

export default Header;
