import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectsPage from "../pages/ProjectsPage";

import { RouteConfig } from "../types/RouteConfig";

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
    path: "/projects",
    element: ProjectsPage,
    type: "public",
  },
  {
    path: "*",
    element: NotFoundPage,
    type: "public",
  },
];
