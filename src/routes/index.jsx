import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenzieHub:token"));

    if (token) {
      return setAuth(true);
    }
  }, [auth]);

  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Home auth={auth} />
        </Route>
        <Route path="/register">
          <Register auth={auth} />
        </Route>
        <Route path="/login">
          <Login auth={auth} setAuth={setAuth} />
        </Route>
        <Route path="/dashboard">
          <Dashboard auth={auth} setAuth={setAuth} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;