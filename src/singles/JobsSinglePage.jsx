import React from "react";
import { jobData } from "../data/jobsdata";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  FaMoneyBillAlt,
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaEnvelope,
  FaExternalLinkAlt,
} from "react-icons/fa";
import "./JobsSinglePage.css";

const JobsSinglePage = () => {
  const { id } = useParams();
  const jobId = String(id);
  const job = jobData.find((item) => String(item.id) === jobId);

  return (
    <div className="container job-details-container mt-4 p-4">
      <div className="row">
        <div className="col-lg-8 col-md-10 offset-md-1">
          {job ? (
            <>
              <div className="job-header text-center">
                <img
                  src={job.companyImage}
                  alt={`${job.company} Logo`}
                  className="company-logo img-fluid"
                />
              </div>
              <h2 className="mt-3">{job.name}</h2>
              <p className="text-muted">
                <FaMoneyBillAlt /> {job.salary}
              </p>
              <div className="job-meta">
                <p className="text-muted">
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <p className="text-muted">
                  <FaBriefcase /> {job.company}
                </p>
                <p className="text-muted">
                  <FaEnvelope /> {job.email}
                </p>
              </div>

              <p>{job.details}</p>
              <div className="row skills">
                <div className="col">
                  <h3>Skills</h3>
                  <div className="d-flex flex-wrap">
                    {job.skills.map((skill, index) => (
                      <div
                        key={index}
                        className="rounded-border bg-light p-2 m-1"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row more-details mt-4">
                <div className="col">
                  <h3>More Details</h3>

                  <p className="bg-light rounded p-2">
                    <FaBriefcase /> Experience: {job.moreDetails.experience}
                  </p>
                  <p className="bg-light rounded p-2">
                    <FaGraduationCap /> Education: {job.moreDetails.education}
                  </p>
                  <p className="bg-light rounded p-2">
                    <FaExternalLinkAlt /> Benefits: {job.moreDetails.benefits}
                  </p>
                  <p className="bg-light rounded p-2">
                    Additional Info: {job.moreDetails.additionalInfo}
                  </p>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col">
                  <Link to={"/message"} >Apply Here</Link>
                </div>
              </div>
            </>
          ) : (
            <p>Job not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsSinglePage;
