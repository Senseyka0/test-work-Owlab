import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import { privateRoutes, publicRoutes, ROUTES } from "../utils/routes";

const AppRouter = () => {
  const { isAuth } = useSelector((state) => state);

  return isAuth ? (
    <Switch>
      {privateRoutes.map((item) => (
        <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
      ))}
      <Redirect to={ROUTES.PROFILE} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((item) => (
        <Route key={item.path} exact={item.exact} path={item.path} component={item.component} />
      ))}
      <Redirect to={ROUTES.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
