import App from "@/App";
import AllProjects from "@/pages/AllProjects";
import Home from "@/pages/Home";
import ProjectDetails from "@/pages/ProjectDetails";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "projects",
        Component: AllProjects,
      },
      {
        path: "projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
  //   {
  //     path: "*",
  //     Component: NotFound,
  //   },
]);

export default router;
