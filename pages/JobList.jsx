import JobListings from "../components/JobListings";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/styles/JobListings.css";

function JobList() {
  return (
    <div className="job-list">
      <Header />
      <main>
        <h2>Find Your Dream Job – Apply Now</h2>
        <JobListings />
      </main>
      <Footer />
    </div>
  );
}

export default JobList;
