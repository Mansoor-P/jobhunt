import React from "react";

const FilterJobs = ({ uniqueCompanies, selectedCompanies, companyHandler }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {uniqueCompanies.map((company) => (
        <div key={company} style={{ marginRight: "10px" }}>
          <input
            type="checkbox"
            checked={selectedCompanies.includes(company)}
            onChange={() => companyHandler(company)}
          />
          {company}
        </div>
      ))}
    </div>
  );
};

export default FilterJobs;
