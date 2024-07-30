import { useState } from "react";
import "../assets/styles/JobCard.css";
import { jobs } from "../data/jobs";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function JobCard() {
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <ul className="job-card-list">
        {currentJobs.map((job) => (
          <li key={job.id} className="job-card-item">
            <h3>{job.title}</h3>
            <div className="cat-com">
              <p className="category">{job.category}</p>
              <p>{job.company}</p>
            </div>
            <span>
              <i className="bi bi-geo-alt-fill"></i>
              {job.location}
            </span>
            <Link to={`/job-details/${job.id}`} className="more-info-link">
              More Info
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          {"<"}
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
