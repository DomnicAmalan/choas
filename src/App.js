import React from 'react';
// import "./app.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import indexRoutes from "./routes";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
      <Redirect exact from="/" to="/welcome" />
        {indexRoutes.map(({ routes }) =>
          routes.map(({ path, exact, component: Component }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={(props) => (
                <Component {...props} />
              )}
            ></Route>
          ))
        )}
      </Switch>
    </BrowserRouter>
  )
}

export default App;