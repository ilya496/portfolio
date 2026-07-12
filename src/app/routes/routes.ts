import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import LoginPage from "../../pages/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage";
import AdminDashboardPage from "../../pages/AdminDashboardPage";

import { RouteConfig } from "../../shared/types/RouteConfig";

export const routes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    type: "public",
  },
  {
    path: "/about",
    element: AboutPage,
    type: "public",
  },
  {
    path: "/admin",
    element: AdminDashboardPage,
    type: "admin",
  },
  {
    path: "/login",
    element: LoginPage,
    type: "public",
  },
  {
    path: "*",
    element: NotFoundPage,
    type: "public",
  },
];
