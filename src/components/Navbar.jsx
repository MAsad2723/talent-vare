import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import profile from "/profile.png";
const Navbar = () => {
  const [selected, setSelected] = useState("");
  const location = useLocation();
  const handleSelect = (event) => {
    setSelected(event.target.textContent);
  };
  return (
    <div className="text-lg flex justify-between px-15 py-5 items-center bg-white">
      <div className="flex gap-8 items-center">
        <img
          className="me-5"
          src={logo}
          width={"41.09px"}
          height={"38.45px"}
          alt="logo"
        />
        <Link
          to="/"
          className={
            selected === "Find Jobs"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Find Jobs
        </Link>
        <Link
          to="/top-companies"
          className={
            selected === "Top Companies"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Top Companies
        </Link>
        <Link
          to="/job-tracker"
          className={
            selected === "Job Tracker"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Job Tracker
        </Link>
        <Link
          to="/my-calendar"
          className={
            selected === "My Calendar"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          My Calendar
        </Link>
        <Link
          to="/documents"
          className={
            selected === "Documents"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Documents
        </Link>
        <Link
          to="/messages"
          className={
            selected === "Messages"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Messages
        </Link>
        <Link
          to="/notifications"
          className={
            selected === "Notifications"
              ? "font-bold text-[var(--primary-color)]"
              : "text-[var(--nav-link-color)]"
          }
          onClick={handleSelect}
        >
          Notifications
        </Link>
      </div>
      <div className="flex gap-4 items-center">
        <div className="bg-[#F6F9FF] flex items-center rounded-lg">
          <svg
            className="mx-5"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4999 17.024L13.9065 14.4306"
              stroke="#737A91"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M13.0976 7.57274C13.0928 8.99051 12.5901 10.3615 11.6773 11.4464C10.7645 12.5313 9.49967 13.261 8.10361 13.5083C6.70756 13.7555 5.26902 13.5045 4.03919 12.7991C2.80936 12.0936 1.86641 10.9786 1.37498 9.64874C0.883559 8.31886 0.874896 6.85859 1.35051 5.52297C1.82611 4.18735 2.75577 3.06123 3.97714 2.34126C5.19851 1.62129 6.63397 1.35324 8.03286 1.58389C9.43175 1.81454 10.7052 2.52924 11.6308 3.6032"
              stroke="#737A91"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          <input
            className="p-2 w-[261px] outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="bg-[var(--primary-color)] text-white py-2 rounded-md px-6 cursor-pointer">
          Resume Builder
        </div>
        <img src={profile} width={"38px"} height={"38px"} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
