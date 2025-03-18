import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import profile from "/profile.png";

const Navbar = () => {
  const [selected, setSelected] = useState("Find Jobs");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleSelect = (event) => {
    setSelected(event.target.textContent);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="text-md flex justify-between p-3 md:px-10 md:py-5 items-center bg-white">
      <div className="flex gap-10">
        <img src={logo} width={"41.09px"} height={"38.45px"} alt="logo" />
        <div
          className={`w-full md:w-auto ${
            isMenuOpen
              ? "flex flex-col gap-4 absolute top-16 px-3 py-2 h-screen bg-white z-10 start-0"
              : "hidden md:flex items-center gap-7 text-sm"
          }`}
        >
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
      </div>
      <div className="hidden md:flex items-center gap-3">
        <div className="bg-[#F6F9FF] w-full md:w-[261px] flex items-center rounded-lg">
          <svg
            className="mx-2"
            width="20"
            height="20"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.4999 17.024L13.9065 14.4306"
              stroke="#737A91"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
            <path
              d="M13.0976 7.57274C13.0928 8.99051 12.5901 10.3615 11.6773 11.4464C10.7645 12.5313 9.49967 13.261 8.10361 13.5083C6.70756 13.7555 5.26902 13.5045 4.03919 12.7991C2.80936 12.0936 1.86641 10.9786 1.37498 9.64874C0.883559 8.31886 0.874896 6.85859 1.35051 5.52297C1.82611 4.18735 2.75577 3.06123 3.97714 2.34126C5.19851 1.62129 6.63397 1.35324 8.03286 1.58389C9.43175 1.81454 10.7052 2.52924 11.6308 3.6032"
              stroke="#737A91"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
            />
          </svg>
          <input
            className="p-2 outline-none"
            type="search"
            placeholder="Search"
          />
        </div>
        <div className="bg-[var(--primary-color)] text-white py-2 rounded-md px-6 cursor-pointer">
          Resume Builder
        </div>
        <img src={profile} width={"38px"} height={"38px"} alt="" />
      </div>
      {/* Toggle Button for Mobile */}
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-controls="navbar-default"
        aria-expanded={isMenuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Navbar;
