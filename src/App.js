import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Messenger from "./Admin/pages/messenger/Messenger";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import HomePage from "./HomePage/HomePage";
import Detail from './Page/Detail'
export default function App() {
  return (
    <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/admin/messenger">
          <Messenger />
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>
      </Switch>
    </Router>
      <Footer />
    </>
    
  );
}
