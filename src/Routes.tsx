import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

//#region Pages
import { Login } from "./pages/Login";
import { Projects } from "./pages/Projects";

//#endregion

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
        <Route path="/index" element={<Projects />} />
      </Switch>
    </Router>
  );
}

export default Routes;
