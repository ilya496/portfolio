import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { useAuth } from "./components/AuthContext.tsx";
import Loader from "./components/Loader/Loader.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import Header from "./widgets/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import Footer from "./widgets/Footer.tsx";
import Sidebar from "./widgets/Sidebar.tsx";
import FakeLoginPage from "./pages/FakeLoginPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import ServicesPage from "./pages/ServicesPage.tsx";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (!user) return <Navigate to="/login" replace />;

  return <Outlet />;
};

const AnonymousRoute = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <Loader />;
  if (user) return <Navigate to="/" replace />;

  return <Outlet />;
};

const StandardLayout = () => (
  <div className="layout-standard">
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </div>
);

const SidebarLayout = () => (
  <div className="layout-sidebar">
    <Header />
    <div className="layout-sidebar__body">
      <aside className="left-panel">
        <Sidebar />
      </aside>
      <main className="layout-sidebar__main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        element: <StandardLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "login", element: <FakeLoginPage /> },
          { path: "projects", element: <ProjectsPage /> },
          { path: "services", element: <ServicesPage /> },
        ],
      },
      {
        element: <AnonymousRoute />,
        children: [
          // { path: "login", element: <LoginPage /> },
          // { path: "register", element: <RegisterPage /> },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <SidebarLayout />,
            children: [
              // { path: "dashboard", element: <DashboardPage /> },
              // { path: "admin/settings", element: <SettingsPage /> },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
