import React from "react";
import { Route, Routes } from "react-router-dom";
import FindJobs from "./FindJobs";

const Home = () => {
  return (
    <div className="px-2 md:px-10">
      <Routes>
        <Route path="/" element={<FindJobs />} />
        {/* We can add multiple components here according to route */}
      </Routes>
    </div>
  );
};

export default Home;
