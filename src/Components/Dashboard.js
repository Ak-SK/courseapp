import React from "react";
import Navbar from "./Navbar/Navbar";
import { Route, Switch } from "react-router-dom";

import Home from "./Home/Home";
import Courses from "./Courses/Courses";
import Institution from "./Institution/Institution";
import Exams from "./Exams/Exams";
import Aboutus from "./Aboutus/Aboutus";
import Contactus from "./Contact/Contactus";
import Footer from "./Footer/Footer";
import Scroller from "../UI/Scroller";
import SingleCourseDetails from "./Courses/SingleCoursedt/SingleCourseDetails";

const Dashboard = (props) => {
  // console.log("dashboard", props.history);
  return (
    <>
      <Navbar {...props} />
      {/* <p>Navbar</p> */}
      <Switch>
        <Route path={`${props.match.url}/home`}>
          <Home {...props} />
        </Route>
        <Route path={`${props.match.url}/courses/:courseId`}>
          <SingleCourseDetails />
        </Route>
        <Route path={`${props.match.url}/courses`}>
          <Courses {...props} />
        </Route>
        <Route path={`${props.match.url}/institution`}>
          <Institution {...props} />
        </Route>
        <Route path={`${props.match.url}/exams`}>
          <Exams {...props} />
        </Route>
        <Route path={`${props.match.url}/aboutus`}>
          <Aboutus {...props} />
        </Route>
        <Route path={`${props.match.url}/contactus`}>
          <Contactus {...props} />
        </Route>
      </Switch>
      <Footer />
      <Scroller />
    </>
  );
};

export default Dashboard;
