import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import teams_logo from "/teams_logo.png";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    // API Call to get featured jobs
    setJobs([
      {
        id: 1,
        isPromoted: true,
        companyLogo: teams_logo,
        jobTitle: "UI/UX Designer",
        companyName: "Teams",
        location: "Seattle, USA",
        isRemote: true,
        postedTime: "3 days ago",
        applicants: "200",
      },
      {
        id: 1,
        isPromoted: true,
        companyLogo: teams_logo,
        jobTitle: "UI/UX Designer",
        companyName: "Teams",
        location: "Seattle, USA",
        isRemote: true,
        postedTime: "3 days ago",
        applicants: "200",
      },
      {
        id: 1,
        isPromoted: true,
        companyLogo: teams_logo,
        jobTitle: "UI/UX Designer",
        companyName: "Teams",
        location: "Seattle, USA",
        isRemote: true,
        postedTime: "3 days ago",
        applicants: "200",
      },
      {
        id: 1,
        isPromoted: true,
        companyLogo: teams_logo,
        jobTitle: "UI/UX Designer",
        companyName: "Teams",
        location: "Seattle, USA",
        isRemote: true,
        postedTime: "3 days ago",
        applicants: "200",
      },
      {
        id: 1,
        isPromoted: true,
        companyLogo: teams_logo,
        jobTitle: "UI/UX Designer",
        companyName: "Teams",
        location: "Seattle, USA",
        isRemote: true,
        postedTime: "3 days ago",
        applicants: "200",
      },
    ]);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <div className="text-xl">Featured Jobs</div>
        <div className="text-[var(--primary-color)] cursor-pointer underline">
          See Featured Jobs
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {jobs.map((job, index) => (
          <JobCard job={job} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;
