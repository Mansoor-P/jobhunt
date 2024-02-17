import React from "react";
import { jobData } from "../data/jobsdata";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";
const JobsPage = () => {
  const allJobs = jobData.slice(5, 10); // Select the first 6 jobs

  return (
    <div>
      <Header />
      <div className="container my-4">
        <h2 className="mb-4">Job Listings</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {allJobs.map((job) => (
            <div key={job.id} className="col">
              <div className="card">
                <div className="card-body">
                  <Link to={`/jobs_notifications/${job.id}`}>
                    <h5 className="card-title">{job.name}</h5>
                  </Link>
                  <p className="card-text">Salary: {job.salary}</p>
                  <p className="card-text">Location: {job.location}</p>
                  <p className="card-text">Skills: {job.skills.join(", ")}</p>
                  <p className="card-text">Details: {job.details}</p>
                  <a href={job.applyLink} className="btn btn-primary">
                    Apply
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default JobsPage;
