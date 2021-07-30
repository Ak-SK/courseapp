import { Route, Switch } from "react-router";
import Signin from "./Components/Signin/Signin";
import StudentsSignup from "./Components/Signup/StudentsSignup";
import InstitutionSignup from "./Components/Signup/InstitutionSignup";
import Dashboard from "./Components/Dashboard";
import UserDashboard from "./Components/User/UserDashboard";

import "./styles.css";

const App = (props) => {
  // console.log("navigator", props.history);
  return (
    <div className="App">
      {/* <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/StudentsSignup" component={StudentsSignup} />
        <Route path="/InstitutionSignup" component={InstitutionSignup} />
        <Route path="/" component={Signin} />
      </Switch> */}
      <UserDashboard />
    </div>
  );
};

export default App;
