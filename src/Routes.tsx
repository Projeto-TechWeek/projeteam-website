import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

//#region Pages
import { Login } from "./pages/Login";

//#endregion

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Login />} />
      </Switch>
    </Router>
  );
}

export default Routes;
