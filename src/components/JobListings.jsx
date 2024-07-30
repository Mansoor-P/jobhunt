import JobCard from "./JobCard";
import "../assets/styles/JobListings.css";
import { jobs } from "../data/jobs";

function JobListings() {
  return (
    <div className="job-listings">
      {jobs.length > 0 ? <JobCard /> : <p>No job listings available.</p>}
    </div>
  );
}

export default JobListings;
