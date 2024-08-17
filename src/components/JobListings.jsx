import JobCard from "./JobCard";
import { Container } from 'react-bootstrap';
import "../assets/styles/JobListings.css";
import { jobs } from "../data/jobs";

function JobListings() {
  return (
    <Container className="job-listings">
      {jobs.length > 0 ? <JobCard jobs={jobs} /> : <p>No job listings available.</p>}
    </Container>
  );
}

export default JobListings;
