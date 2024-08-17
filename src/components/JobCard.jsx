import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/JobCard.css";
import { Container, Row, Col, Button } from 'react-bootstrap';

function JobCard({ jobs }) {
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
    <Container>
      <Row className="job-card-list">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <Col key={job.id} md={6} lg={4} className="mb-4">
              <div className="job-card-item p-3">
                <h3>{job.title}</h3>
                <div className="cat-com">
                  <p className="category">{job.category}</p>
                  <p className="company">{job.company}</p>
                </div>
                <span className="location">
                  <i className="bi bi-geo-alt-fill"></i>
                  {job.location}
                </span>
               <div>
               <Link to={`/job-details/${job.id}`} className="more-info-link">
                  More Info
                </Link>
               </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No jobs available</p>
        )}
      </Row>
      <div className="pagination d-flex justify-content-center my-4">
        <Button onClick={handlePrevPage} disabled={currentPage === 1}>
          {"<"}
        </Button>
        <span className="mx-3">
          Page {currentPage} of {totalPages}
        </span>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
          {">"}
        </Button>
      </div>
    </Container>
  );
}

export default JobCard;
