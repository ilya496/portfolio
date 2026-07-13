import { Route, Routes, Navigate } from "react-router-dom";

import { routes } from "./routes";
import { RouteConfig } from "../../shared/types/RouteConfig";

const isAuthenticated = (): boolean => {
  return true;
};

const isAdmin = (): boolean => {
  return false;
};

function Router() {
  return (
    <Routes>
      {routes.map((route: RouteConfig, index: number) => {
        if (route.type === "private") {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated() ? <route.element /> : <Navigate to="/login" />
              }
            />
          );
        }

        if (route.type === "admin") {
          return (
            <Route
              key={index}
              path={route.path}
              element={
                isAuthenticated() && isAdmin() ? (
                  <route.element />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          );
        }

        return (
          <Route key={index} path={route.path} element={<route.element />} />
        );
      })}
    </Routes>
  );
}

export default Router;
