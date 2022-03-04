import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Messenger from "./Admin/pages/messenger/Messenger";
import HomePage from "./HomePage/HomePage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin/messenger">
          <Messenger />
        </Route>
      </Switch>
    </Router>
  );
}
