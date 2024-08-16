import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../assets/styles/JobDetails.css";
import { jobs } from "../data/jobs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaBuilding, FaMapMarkerAlt, FaDollarSign, FaTag } from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <>
        <Header />
        <Container className="error text-center my-5">
          <h1>Job Not Found</h1>
          <p>We couldn't find the job listing you're looking for.</p>
          <a href="/" className="btn btn-primary">Go back to homepage</a>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container className="job-details">
        <h1 className="mb-4">{job.title}</h1>

        <Row className="mb-4">
          <Col md={6} lg={3} className="d-flex align-items-center">
            <FaBuilding size={24} className="me-2" />
            <p>{job.company}</p>
          </Col>
          <Col md={6} lg={3} className="d-flex align-items-center">
            <FaMapMarkerAlt size={24} className="me-2" />
            <p>{job.location}</p>
          </Col>
          <Col md={6} lg={3} className="d-flex align-items-center">
            <FaTag size={24} className="me-2" />
            <p>{job.category}</p>
          </Col>
          <Col md={6} lg={3} className="d-flex align-items-center">
            <FaDollarSign size={24} className="me-2" />
            <p>{job.salary}</p>
          </Col>
        </Row>

        <h2>Description</h2>
        <p>{job.description.aboutJob}</p>

        <h2>Qualifications</h2>
        <ul>
          {job.description.jobQualifications.map((qual, index) => (
            <li key={index}>{qual}</li>
          ))}
        </ul>

        <h2>Key Responsibilities</h2>
        <ul>
          {job.description.keyResponsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        <div className="skills">
          <h2>Must-Have Skills</h2>
          <ul>
            {job.description.mustHaveSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <a
          href={job.applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary apply-link"
        >
          Apply Now
        </a>
      </Container>

      <Footer />
    </>
  );
}

export default JobDetails;
