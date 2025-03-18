import React from "react";

const JobCard = ({ job }) => {
  const {
    isPromoted,
    companyLogo,
    jobTitle,
    companyName,
    location,
    isRemote,
    postedTime,
    applicants,
  } = job;

  return (
    <div className="bg-white rounded-lg p-3 pe-5 w-full md:max-w-54">
      {/* Promoted Label */}
      {isPromoted && <p className="text-xs font-semibold">Promoted</p>}

      {/* Job Header */}
      <div className="flex items-center gap-3 mt-2">
        <div className="p-1">
          <img
            src={companyLogo}
            alt="Team Logo"
            className="w-[23px] h-[21.4px]"
          />
        </div>

        <div>
          <h3 className="text-md">{jobTitle}</h3>
          <p className="text-sm text-gray-500">{companyName}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="text-gray-600 text-sm mt-2">
        <div className="flex items-center gap-2">
          <svg
            width="10"
            height="12"
            viewBox="0 0 10 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0C2.36 0 0.199997 2.16 0.199997 4.8C0.199997 8.04 4.4 11.7 4.58 11.88C4.7 11.94 4.88 12 5 12C5.12 12 5.3 11.94 5.42 11.88C5.6 11.7 9.8 8.04 9.8 4.8C9.8 2.16 7.64 0 5 0ZM5 10.62C3.74 9.42 1.4 6.84 1.4 4.8C1.4 2.82 3.02 1.2 5 1.2C6.98 1.2 8.6 2.82 8.6 4.8C8.6 6.78 6.26 9.42 5 10.62ZM5 2.4C3.68 2.4 2.6 3.48 2.6 4.8C2.6 6.12 3.68 7.2 5 7.2C6.32 7.2 7.4 6.12 7.4 4.8C7.4 3.48 6.32 2.4 5 2.4ZM5 6C4.34 6 3.8 5.46 3.8 4.8C3.8 4.14 4.34 3.6 5 3.6C5.66 3.6 6.2 4.14 6.2 4.8C6.2 5.46 5.66 6 5 6Z"
              fill="#585D6E"
            />
          </svg>

          <p>
            {location} {isRemote ? " (Remote)" : ""}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 10.8C7.27304 10.8 8.49394 10.2943 9.39411 9.39411C10.2943 8.49394 10.8 7.27304 10.8 6C10.8 4.72696 10.2943 3.50606 9.39411 2.60589C8.49394 1.70571 7.27304 1.2 6 1.2C4.72696 1.2 3.50606 1.70571 2.60589 2.60589C1.70571 3.50606 1.2 4.72696 1.2 6C1.2 7.27304 1.70571 8.49394 2.60589 9.39411C3.50606 10.2943 4.72696 10.8 6 10.8ZM6 0C6.78793 0 7.56815 0.155195 8.2961 0.456723C9.02405 0.758251 9.68549 1.20021 10.2426 1.75736C10.7998 2.31451 11.2417 2.97595 11.5433 3.7039C11.8448 4.43185 12 5.21207 12 6C12 7.5913 11.3679 9.11742 10.2426 10.2426C9.11742 11.3679 7.5913 12 6 12C2.682 12 0 9.3 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0ZM6.3 3V6.15L9 7.752L8.55 8.49L5.4 6.6V3H6.3Z"
              fill="#585D6E"
            />
          </svg>

          <p>
            {postedTime} |{" "}
            <span className="text-[var(--primary-color)] cursor-pointer">
              {applicants} applicants
            </span>
          </p>
        </div>
      </div>

      {/* Apply Button & Save Icon */}
      <div className="flex items-center justify-between mt-4">
        <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-lg text-sm w-[120px] cursor-pointer">
          Apply Now
        </button>
        <button role="button" className="cursor-pointer">
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.9148C1 2.89462 1 2.38453 1.20762 1.99468C1.39023 1.65191 1.68161 1.37323 2.04 1.19857C2.44762 1 2.98095 1 4.04762 1H9.38095C10.4476 1 10.981 1 11.3886 1.19857C11.747 1.37323 12.0383 1.65191 12.221 1.99468C12.4286 2.38453 12.4286 2.89462 12.4286 3.9148V16.034C12.4286 16.4767 12.4286 16.698 12.3324 16.8192C12.2908 16.8719 12.2378 16.9153 12.1769 16.9464C12.1161 16.9776 12.0489 16.9957 11.98 16.9995C11.821 17.0086 11.6286 16.8857 11.2438 16.6406L6.71429 13.7523L2.18476 16.6397C1.8 16.8857 1.60762 17.0086 1.44762 16.9995C1.37889 16.9956 1.31188 16.9774 1.25121 16.9462C1.19054 16.9151 1.13765 16.8718 1.09619 16.8192C1 16.698 1 16.4767 1 16.034V3.9148Z"
              stroke="#AAAAAA"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
