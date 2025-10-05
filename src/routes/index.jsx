import { redirect } from "react-router-dom";

// Pages
import LandingPage from "../pages/landing";

const routes = {
  createRoutes: () => {
    const routes = [];

    routes.push(
      {
        path: "",
        loader: () => redirect("/landing"),
      },
      {
        path: "/landing",
        element: <LandingPage />,
      }
    );

    return routes;
  },
};

export default routes;
