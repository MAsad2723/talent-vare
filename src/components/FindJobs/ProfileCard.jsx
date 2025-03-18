import React, { useEffect, useState } from "react";
import profile2 from "/profile2.png";
import cover from "/cover.png";
import InterviewSection from "./InterviewSection";

const ProfileCard = () => {
  const [user, setUser] = useState({});
  const [openInterviewSection, setOpenInterviewSection] = useState(false);

  useEffect(() => {
    const getProfileDetails = () => {
      // API Call to get the details of profile
      setUser({
        name: "Albert Flores",
        title:
          "Senior Product Designer | UI/UX Designer | Graphic Designer | Web Developer",
        location: "Clinton, Maryland",
        profileVisitors: 140,
        resumeViewers: 20,
        myJobs: 88,
        interviews: [
          {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted",
          },
          {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted",
          },
          {
            role: "UI UX Designer",
            company: "Figma",
            date: "16th Feb",
            time: "13:45",
            location: "Remote",
            status: "Accepted",
          },
        ],
        profilePic: profile2,
        coverPhoto: cover,
      });
    };
    getProfileDetails();
  }, []);
  return (
    <div className="w-sm md:w-md flex flex-col gap-4">
      {/* Profile Header */}
      <div>
        <div className="relative rounded-2xl">
          <img
            src={user?.coverPhoto} // Replace with actual cover image
            alt="Cover"
            className="w-full h-24 object-cover rounded-t-2xl"
          />
          <img
            src={user?.profilePic} // Replace with actual profile image
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-8"
          />
        </div>

        {/* User Info */}
        <div className="pt-10 pb-4 text-center px-13 bg-white rounded-2xl">
          <h2 className="text-xl font-semibold">{user?.name}</h2>
          <p className="text-gray-500 text-sm">
            {user?.title?.length > 65
              ? `${user.title.substring(0, 65)}...`
              : user?.title}
          </p>
          <p className="text-gray-500 text-sm cursor-pointer">
            {user?.location}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col bg-white p-4 rounded-2xl">
        <div className="flex justify-between py-2">
          <span className="">Profile Visitors</span>
          <span className="text-[var(--primary-color)]">
            {user?.profileVisitors}
          </span>
        </div>
        <hr className="border border-gray-200" />
        <div className="flex justify-between py-2">
          <span className="">Resume Viewers</span>
          <span className="text-[var(--primary-color)]">
            {user?.resumeViewers}
          </span>
        </div>
        <hr className="border border-gray-200" />
        <div className="flex justify-between py-2">
          <span className="">My Jobs</span>
          <span className="text-[var(--primary-color)]">{user?.myJobs}</span>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-2xl p-3 flex flex-col justify-between gap-3">
        <div
          className="flex justify-between items-center"
          onClick={() => setOpenInterviewSection(!openInterviewSection)}
        >
          <div>
            <h2 className="text-lg font-semibold">My Calendar</h2>
            <p className="text-gray-400 text-sm cursor-pointer">
              Upcoming Interviews
            </p>
          </div>
          <span
            className={`text-slate-800 transition-transform duration-300 text-xl ${
              openInterviewSection ? "rotate-0" : "rotate-180"
            }`}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.91 0.433005L12.97 1.49401L7.19297 7.27301C7.1004 7.36616 6.99033 7.44009 6.86908 7.49054C6.74783 7.54098 6.6178 7.56696 6.48647 7.56696C6.35514 7.56696 6.22511 7.54098 6.10386 7.49054C5.98261 7.44009 5.87254 7.36616 5.77997 7.27301L-3.04452e-05 1.49401L1.05997 0.434005L6.48497 5.85801L11.91 0.433005Z"
                fill="#333333"
              />
            </svg>
          </span>
        </div>
        {/* Upcoming Interviews */}
        <div
          className={`space-y-3 bg-white overflow-hidden transition-all duration-300 ease-in-out ${
            openInterviewSection ? "max-h-80" : "max-h-0"
          }`}
        >
          {user?.interviews?.map((interview, index) => (
            <div key={index} className="flex items-center rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" // Figma logo
                alt="Company Logo"
                className="w-7 h-7 rounded-md mr-3"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{interview.role}</h3>
                <p className="text-gray-500 text-sm">{interview.company}</p>
                <p className="text-gray-500 text-sm">
                  {interview.date} | {interview.time} | {interview.location}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-green-200 text-green-700 px-3 py-1 rounded-md text-sm">
                  {interview.status}
                </span>
                <button className="text-gray-500 hover:text-red-500 text-sm">
                  Deny
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
