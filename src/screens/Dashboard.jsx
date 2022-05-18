import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import  Navbar  from "../navbar/Navbar";
import { Outlet, Route } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { http } from "../config/axiosConfig";
import "./dashboard.css";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  useEffect(() => {
    http("/dashboard").then(res => setDashboardData(res.data));
  }, []);
  console.log(dashboardData);

  return (
    <div className="m-dashboard">
      <div className="m-navbar"></div>
      <div className="m-sidebar">
        <Sidebar />
      </div>
      <div className="m-main-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;