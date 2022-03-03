import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home authenticated={authenticated} />
        </Route>
        <Route path="/register">
          <Register authenticated={authenticated} />
        </Route>
        <Route path="/login">
          <Login authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <Route path="/dashboard">
          <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;