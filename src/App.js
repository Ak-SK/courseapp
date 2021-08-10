import { Route, Switch, Redirect } from "react-router";
import Signin from "./Components/Signin/Signin";
import StudentsSignup from "./Components/Signup/StudentsSignup";
import InstitutionSignup from "./Components/Signup/InstitutionSignup";
import Dashboard from "./Components/Dashboard";
import UserDashboard from "./Components/User/UserDashboard";

import "./styles.css";

const RedirectHome = () => {
  return <Redirect to="/dashboard/home" />;
};

const App = (props) => {
  // console.log("navigator", props.history);
  return (
    <div className="App">
      <Switch>
        <Route path="/userdashboard" component={UserDashboard} />
        <Route path="/StudentsSignup" component={StudentsSignup} />
        <Route path="/InstitutionSignup" component={InstitutionSignup} />
        <Route path="/login" component={Signin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={RedirectHome} />
      </Switch>
    </div>
  );
};

export default App;
