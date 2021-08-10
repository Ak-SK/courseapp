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
import { Route, Switch } from "react-router-dom";
import MyCertificate from "./MyCertificates/MyCertificate";

const UserDashboard = (props) => {
  return (
    <>
      <section style={{ backgroundColor: "#f9fafc;" }}>
        <div class="container-fluid mt60">
          <div class="row m-0">
            <Sidebar {...props} />
            <div class="col-md-9 col-lg-10 col-xl-10 scrollbar">
              <Header />
              <Switch>
                <Route path={`${props.match.url}/myprofile`}>
                  <MyProfile {...props} />
                </Route>
                <Route path={`${props.match.url}/mycourses`}>
                  <MyCourses />
                </Route>
                <Route path={`${props.match.url}/mybookmarks`}>
                  <MyBookmarks {...props} />
                </Route>
                <Route path={`${props.match.url}/mycart`}>
                  <MyCart {...props} />
                </Route>
                <Route path={`${props.match.url}/myorder`}>
                  <MyOrder {...props} />
                </Route>
                <Route path={`${props.match.url}/mysettings`}>
                  <MySettings {...props} />
                </Route>
                <Route path={`${props.match.url}/myCertificates`}>
                  <MyCertificate {...props} />
                </Route>
              </Switch>
              <UserFooter />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserDashboard;
