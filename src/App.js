import { Route, Switch } from "react-router";
import Signin from "./Components/Signin/Signin";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard";
// import SingleInstitutionDetails from "./Components/Institution/InstitutionSingle/SingleInstitutionDetails";

import "./styles.css";
// import CourseDetials from "./Components/Courses/SingleCoursedt/SingleCourseDetails";

const App = (props) => {
  // console.log("navigator", props.history);
  return (
    <div className="App">
      {/* <CourseDetials /> */}
      {/* <SingleInstitutionDetails /> */}
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Signin} />
      </Switch>
    </div>
  );
};

export default App;
