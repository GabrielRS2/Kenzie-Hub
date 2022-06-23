import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function Routes({user, setUser, token, userId, setUserId, setToken, techs, setTechs }) {

  return (
    <Switch>
      <Route exact path={"/"}>
        <Login setUser={setUser} setUserId={setUserId} setToken={setToken} setTechs={setTechs}/>
      </Route>
      <Route exact path={"/register"}>
        <Register />
      </Route>
      <Route exact path={"/dashboard"}>
        <Home user={user} token={token} setUser={setUser} userId={userId} techs={techs} setTechs={setTechs}/>
      </Route>
    </Switch>
  );
}

export default Routes;