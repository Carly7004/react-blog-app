import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Write from "../src/pages/write/Write";
import Setting from "../src/pages/settings/Setting";
import Single from "../src/pages/single/Single";
import Login from "../src/pages/login/Login";
import { useContext } from "react";
import { Context } from "./context/context";



function App() {
  const {user} = useContext(Context)
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
{/* Page conditional rendering base on user is login or not */}
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/setting">{user ? <Setting /> : <Register />}</Route>
        <Route path="/post/:postId">{<Single />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
