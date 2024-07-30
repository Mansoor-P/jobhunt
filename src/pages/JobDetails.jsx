import { useParams } from "react-router-dom";
import "../assets/styles/JobDetails.css";
import { jobs } from "../data/jobs";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaDollarSign,
  FaTag,
} from "react-icons/fa";

function JobDetails() {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <>
      <Header />
      <div className="job-details">
        <h1>{job.title}</h1>

        <div className="main-info-items">
          <div className="info-item">
            <FaBuilding size={24} />
            <p>{job.company}</p>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt size={24} />
            <p>{job.location}</p>
          </div>

          <div
            className="info-item"
            style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
          >
            <FaTag size={24} />
            <p>{job.category}</p>
          </div>

          <div className="info-item">
            <FaDollarSign size={24} />
            <p>{job.salary}</p>
          </div>
        </div>

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
          className="apply-link"
        >
          Apply Now
        </a>
      </div>

      <Footer />
    </>
  );
}

export default JobDetails;
