import React from "react";
import "./User.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import MyProfile from "./MyProfile/MyProfile";
import MyCourses from "./MyCourses/MyCourses";
import MyBookmarks from "./MyBookmarks/MyBookmarks";
import MyCart from "./MyCart/MyCart";
import MyOrder from "./MyOrder/MyOrder";
import MySettings from "./MySettings/MySettings";
import UserFooter from "./UserFooter/UserFooter";

const UserDashboard = (props) => {
  return (
    <>
      <section style={{ backgroundColor: "#f9fafc;" }}>
        <div class="container-fluid mt60">
          <div class="row m-0">
            <Sidebar />
            <div class="col-md-9 col-lg-10 col-xl-10 scrollbar">
              <Header />
              <MySettings />
              <UserFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
