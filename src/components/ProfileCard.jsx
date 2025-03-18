import React from "react";
import profile2 from "/profile2.png";
import cover from "/cover.png";
const ProfileCard = () => {
  const interviews = [
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
  ];
  return (
    <div className="max-w-sm flex flex-col gap-4">
      {/* Profile Header */}
      <div>
        <div className="relative rounded-2xl">
          <img
            src={cover} // Replace with actual cover image
            alt="Cover"
            className="w-full h-24 object-cover rounded-t-2xl"
          />
          <img
            src={profile2} // Replace with actual profile image
            alt="Profile"
            className="w-20 h-20 rounded-full border-4 border-white absolute left-1/2 transform -translate-x-1/2 -bottom-8"
          />
        </div>

        {/* User Info */}
        <div className="pt-10 pb-4 text-center px-14 bg-white rounded-2xl">
          <h2 className="text-xl font-semibold">Albert Flores</h2>
          <p className="text-gray-500 text-sm">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web
            Developer
          </p>
          <p className="text-gray-500 text-sm cursor-pointer">
            Clinton, Maryland
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-col bg-white p-4 rounded-2xl">
        <div className="flex justify-between py-2">
          <span className="">Profile Visitors</span>
          <span className="text-[var(--primary-color)]">140</span>
        </div>
        <hr className="border border-gray-200" />
        <div className="flex justify-between py-2">
          <span className="">Resume Viewers</span>
          <span className="text-[var(--primary-color)]">20</span>
        </div>
        <hr className="border border-gray-200" />
        <div className="flex justify-between py-2">
          <span className="">My Jobs</span>
          <span className="text-[var(--primary-color)]">88</span>
        </div>
      </div>

      {/* Calendar Section */}
      <div className="bg-white rounded-2xl p-3 flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">My Calendar</h2>
            <p className="text-gray-400 text-sm cursor-pointer">
              Upcoming Interviews
            </p>
          </div>
          <span className="text-xl cursor-pointer">
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
        <div className="space-y-3 bg-white">
          {interviews.map((interview, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" // Figma logo
                alt="Company Logo"
                className="w-10 h-10 rounded-md mr-3"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{interview.role}</h3>
                <p className="text-gray-500 text-sm">{interview.company}</p>
                <p className="text-gray-500 text-sm">
                  {interview.date} | {interview.time} | {interview.location}
                </p>
              </div>
              <div className="flex items-center space-x-3">
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
