import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button } from "react-bootstrap";
import "../assets/styles/ErrorPage.css";
import { Link } from "react-router-dom";
import errorImage from "../assets/images/404.png"
function ErrorPage() {
  return (
    <>
      <Header />
      <Container className="error-page d-flex flex-column min-vh-100">
        <main className="d-flex flex-column align-items-center justify-content-center text-center py-5">
          <h2 className="mb-4">Oops! 404 - Page Not Found</h2>
          <p className="mb-4">
            We could not find the page you were looking for. It might have been
            moved or deleted.
          </p>
          <p className="mb-4">
            Don’t worry, you can go back to our{" "}
            <Link to="/" className="link-primary">
              homepage
            </Link>{" "}
            or check out our latest updates.
          </p>
          <img
            src={errorImage}
            alt="404 Error"
            className="img-fluid mb-4"
          />
          <Button
            variant="primary"
            onClick={() => (window.location.href = "/")}
          >
            Go to Homepage
          </Button>
        </main>
      </Container>
      <Footer />
    </>
  );
}

export default ErrorPage;
