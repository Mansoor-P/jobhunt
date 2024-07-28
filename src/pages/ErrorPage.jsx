import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <Header />
      <main>
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
