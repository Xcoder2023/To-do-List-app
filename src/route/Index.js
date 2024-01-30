import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/Dashboard";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default index;
