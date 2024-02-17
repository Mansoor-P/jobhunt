import React from "react";
import { jobData } from "../data/jobsdata";
import { Link } from "react-router-dom";
const Jobs = () => {
  const limitedJobs = jobData.slice(0, 4); // Select the first 6 jobs

  return (
    <div className="container my-4">
      <h2 className="mb-4">Job Listings</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {limitedJobs.map((job) => (
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
      <div>
        <ul>
          <li>
            <Link to="/jobs_notifications">Jobs Notifications</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Jobs;
