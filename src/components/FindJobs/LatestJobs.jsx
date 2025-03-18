import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import teams_logo from "/teams_logo.png";

const LatestJobs = () => {
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
        id: 2,
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
        id: 3,
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
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
        id: 9,
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
        id: 10,
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
        <div className="text-xl">Latest Jobs</div>
        <div className="text-[var(--primary-color)] cursor-pointer underline">
          See Latest Jobs
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

export default LatestJobs;
