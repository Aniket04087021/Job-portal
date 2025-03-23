import React from "react";
import LatestjobCards from "./LatestjobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8,9];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-20">
      <h1 className="text-4xl font-bold">
        <span className="text-[#7D1C4A]">Latest & Top </span>Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-4 my-5">
        {randomJobs.slice(0,9).map((item, index) => (
          <LatestjobCards />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
