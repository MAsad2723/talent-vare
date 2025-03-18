import React from "react";
import ProfileCard from "./FindJobs/ProfileCard";
import JobCard from "./FindJobs/JobCard";
import teams_logo from "/teams_logo.png";
import FeaturedJobs from "./FindJobs/FeaturedJobs";
import RecommendedJobs from "./FindJobs/RecommendedJobs";
import LatestJobs from "./FindJobs/LatestJobs";
const FindJobs = () => {
  const similar = ["Frontend", "Backend", "Graphics Designer"];
  const job = {
    id: 1,
    isPromoted: true,
    companyLogo: teams_logo,
    jobTitle: "UI/UX Designer",
    companyName: "Teams",
    location: "Seattle, USA",
    isRemote: true,
    postedTime: "3 days ago",
    applicants: "200",
  };
  return (
    <div className="flex flex-col md:flex-row gap-6 mt-8">
      <ProfileCard />
      <div className="flex flex-col gap-4 mt-3 w-full">
        <div className="flex flex-col">
          <div className="font-bold text-2xl">
            Find your Dream Job,{" "}
            <span className="text-[var(--primary-color)]">Albert!</span>
          </div>
          <div>
            Explore the latest job openings and apply for the best opportunities
            available today!
          </div>
        </div>
        {/* Mobile Screen */}
        <div className="bg-white flex md:hidden flex-col flex-wrap justify-between rounded-lg w-full p-3 gap-2">
          {/* Job Title Input */}
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="flex-1 px-4 py-2 outline-none text-[#585D6E] w-full border rounded-lg"
          />
          <div className="flex justify-between items-center">
            {/* Location Dropdown */}
            <select className="px-4 py-2 outline-none bg-transparent text-[#585D6E] cursor-pointer border rounded-lg w-[47%]">
              <option>Select Location</option>
              <option>Remote</option>
              <option>New York</option>
              <option>London</option>
            </select>

            {/* Divider */}
            <span className="border-l h-6 text-gray-300"></span>

            {/* Job Type Dropdown */}
            <select className="px-4 py-2 text-[#585D6E] outline-none bg-transparent cursor-pointer border rounded-lg w-[47%]">
              <option>Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Freelance</option>
            </select>
          </div>
          {/* Search Button */}
          <button className="bg-[var(--primary-color)] text-white px-[20px] py-[10px] rounded-lg flex items-center gap-2 cursor-pointer justify-center w-full">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.25 17L13.6566 14.4066"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
              <path
                d="M12.8477 7.5487C12.8428 8.96647 12.3401 10.3375 11.4274 11.4224C10.5146 12.5072 9.24973 13.237 7.85367 13.4842C6.45762 13.7315 5.01908 13.4805 3.78925 12.775C2.55943 12.0696 1.61647 10.9546 1.12504 9.62471C0.63362 8.29482 0.624957 6.83456 1.10057 5.49894C1.57618 4.16331 2.50583 3.0372 3.7272 2.31723C4.94857 1.59726 6.38403 1.32921 7.78292 1.55986C9.18181 1.79051 10.4552 2.50521 11.3808 3.57917"
                stroke="white"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
              />
            </svg>
            <div>Search</div>
          </button>
        </div>
        {/* Desktop Screen */}
        <div className="bg-white hidden md:flex flex-row flex-wrap justify-between items-center rounded-lg w-full p-[20px] gap-2">
          {/* Job Title Input */}
          <input
            type="text"
            placeholder="Job Title, Company, or Keywords"
            className="flex-1 px-4 py-2 outline-none text-[#585D6E] w-full"
          />
          <div className="flex flex-wrap items-center gap-5">
            {/* Divider */}
            <span className="border-l h-6 text-gray-300"></span>

            {/* Location Dropdown */}
            <select className="px-4 py-2 outline-none bg-transparent text-[#585D6E] cursor-pointer">
              <option>Select Location</option>
              <option>Remote</option>
              <option>New York</option>
              <option>London</option>
            </select>

            {/* Divider */}
            <span className="border-l h-6 text-gray-300"></span>

            {/* Job Type Dropdown */}
            <select className="px-4 py-2 text-[#585D6E] outline-none bg-transparent cursor-pointer">
              <option>Job Type</option>
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Freelance</option>
            </select>

            {/* Search Button */}
            <button className="bg-[var(--primary-color)] text-white px-[20px] py-[10px] rounded-lg flex items-center gap-2 cursor-pointer w-[140px] justify-center">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.25 17L13.6566 14.4066"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
                <path
                  d="M12.8477 7.5487C12.8428 8.96647 12.3401 10.3375 11.4274 11.4224C10.5146 12.5072 9.24973 13.237 7.85367 13.4842C6.45762 13.7315 5.01908 13.4805 3.78925 12.775C2.55943 12.0696 1.61647 10.9546 1.12504 9.62471C0.63362 8.29482 0.624957 6.83456 1.10057 5.49894C1.57618 4.16331 2.50583 3.0372 3.7272 2.31723C4.94857 1.59726 6.38403 1.32921 7.78292 1.55986C9.18181 1.79051 10.4552 2.50521 11.3808 3.57917"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                />
              </svg>
              <div>Search</div>
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center text-[#585D6E]">
          <div>Similar:</div>
          <div className="flex flex-wrap gap-2">
            {similar.map((skill) => (
              <div className="border text-xs md:text-base py-[8px] px-[15px] rounded-lg hover:text-[var(--primary-color)] cursor-pointer">
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-col gap-10 overflow-auto h-136"
          style={{ scrollbarWidth: "none" }}
        >
          <FeaturedJobs />
          <hr className="m-0 text-gray-200" />
          <RecommendedJobs />
          <hr className="m-0 text-gray-200" />
          <LatestJobs />
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
