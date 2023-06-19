/* eslint-disable react/display-name */
import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import LoadingScreen from "../components/loadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const Home = Loadable(lazy(() => import("../pages/home")));
