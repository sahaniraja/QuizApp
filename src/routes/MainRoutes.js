import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - subdashboard
const SubDashboard = Loadable(
  lazy(() => import("../pages/dashboard/subdashboard"))
);

// render - exam quiz page
const ExamQuiz = Loadable(lazy(() => import("../pages/exam")));

// render - exam quiz question page
const ExamQuizQuest = Loadable(
  lazy(() => import("../pages/exam/ExamQuizQuest"))
);

//render - exam detail form
const ExamDetail = Loadable(lazy(() => import("../pages/exam/ExamDetailForm")));

// render - utilities
const Typography = Loadable(
  lazy(() => import("../pages/components-overview/Typography"))
);
const Color = Loadable(
  lazy(() => import("../pages/components-overview/Color"))
);
const Shadow = Loadable(
  lazy(() => import("../pages/components-overview/Shadow"))
);
const AntIcons = Loadable(
  lazy(() => import("../pages/components-overview/AntIcons"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />
    },
    {
      path: "color",
      element: <Color />
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: "shadow",
      element: <Shadow />
    },
    {
      path: "typography",
      element: <Typography />
    },
    {
      path: "icons/ant",
      element: <AntIcons />
    },
    {
      path: "category/:id/:name",
      element: <SubDashboard />
    },
    {
      path: "examquiz/:name/:id",
      element: <ExamQuiz />
    },
    {
      path: "examdetail/:id",
      element: <ExamDetail />
    },
    {
      path: "startexam/",
      element: <ExamQuizQuest />
    }
  ]
};

export default MainRoutes;
