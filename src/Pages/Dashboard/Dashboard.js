import React from "react";
import Footer from "../Shared/Footer/Footer";
import DashBoardNavBar from "../Shared/Navbar/DashBoardNavBar";
import DashBoardViews from "./DashBoardViews";

const Dashboard = () => {
  return (
    <div>
      <DashBoardNavBar></DashBoardNavBar>
      <DashBoardViews></DashBoardViews>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
