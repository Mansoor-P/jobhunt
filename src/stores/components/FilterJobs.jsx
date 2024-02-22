import React from "react";
import "./FilterJobs.css";

const FilterJobs = ({ uniqueCompanies, selectedCompanies, companyHandler }) => {
  return (
    <div className="filter-jobs-container">
      {uniqueCompanies.map((company) => (
        <button
          key={company}
          className={`company-button ${selectedCompanies.includes(company) ? "selected" : ""}`}
          onClick={() => companyHandler(company)}
        >
          {company}
        </button>
      ))}
    </div>
  );
};

export default FilterJobs;
