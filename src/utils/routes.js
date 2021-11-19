import { Profile, News, Login, Home } from "../pages";

export const ROUTES = {
  HOME: "/",
  NEWS: "/news",
  LOGIN: "/login",
  PROFILE: "/profile",
};

export const privateRoutes = [
  { path: ROUTES.HOME, exact: true, component: Home },
  { path: ROUTES.PROFILE, exact: true, component: Profile },
  { path: ROUTES.NEWS, exact: true, component: News },
];

export const publicRoutes = [
  { path: ROUTES.HOME, exact: true, component: Home },
  { path: ROUTES.NEWS, exact: true, component: News },
  { path: ROUTES.LOGIN, exact: true, component: Login },
];
