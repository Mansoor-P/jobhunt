import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jobData } from "../data/jobsdata";
import Header from "../components/header/Header";
import FilterJobs from "../components/jobs/filterJobs/FilterJobs";
import Footer from "../components/footer/Footer";

const JobsPage = () => {
  const allJobs = jobData.slice(5, 10);

  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const uniqueCompanies = Array.from(
    new Set(jobData.map((job) => job.company))
  );

  const companyHandler = (company) => {
    if (selectedCompanies.includes(company)) {
      setSelectedCompanies(
        selectedCompanies.filter(
          (selectedCompany) => selectedCompany !== company
        )
      );
    } else {
      setSelectedCompanies([...selectedCompanies, company]);
    }
  };

  const filteredJob =
    selectedCompanies.length === 0
      ? allJobs
      : allJobs.filter((job) => selectedCompanies.includes(job.company));

  return (
    <>
      <Header />

      <FilterJobs
        uniqueCompanies={uniqueCompanies}
        selectedCompanies={selectedCompanies}
        companyHandler={companyHandler}
      />

      <div className="container my-4">
        <h2 className="mb-4">Job Listings</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {filteredJob.map((job) => (
            <div key={job.id} className="col">
              <div className="card">
                <div className="card-body">
                  <Link to={`/jobs_notifications/${job.id}`}>
                    <h5 className="card-title  ">{job.name}</h5>
                  </Link>
                  <p className="card-text">Company: {job.company}</p>
                  <p className="card-text">Salary: {job.salary}</p>
                  <p className="card-text">Location: {job.location}</p>
                  <p className="card-text">Skills: {job.skills.join(", ")}</p>
                  <p className="card-text">Details: {job.details}</p>
                  <Link to={`/jobs_notifications/${job.id}`}>
                    Apply Here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobsPage;
