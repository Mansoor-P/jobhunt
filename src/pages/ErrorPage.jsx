import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/ErrorPage.css";
import notFoundImage from "../assets/images/404.png";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header />

      <div className="error-page">
        <main>
          <h2>Oops! 404 - Page Not Found</h2>
          <p>
            We could not find the page you were looking for. It might have been
            moved or deleted.
          </p>
          <p>
            Don’t worry, you can go back to our <a href="/">homepage</a> or
            check out our latest updates.
          </p>
          <img src={notFoundImage} alt="404 Error" />
          <button onClick={() => navigate("/")}>Go to Homepage</button>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default ErrorPage;
