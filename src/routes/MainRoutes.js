import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MainLayout from "../layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../pages/dashboard")));

// render - masters
const Category = Loadable(
  lazy(() => import("../pages/admin/masters/Category"))
);
const SubCategory = Loadable(
  lazy(() => import("../pages/admin/masters/SubCategory"))
);
const Product = Loadable(lazy(() => import("../pages/admin/masters/Product")));

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

const Color = Loadable(
  lazy(() => import("../pages/components-overview/Color"))
);
//render - support
const HelpnSupport = Loadable(
  lazy(() => import("../pages/admin/supports/HelpnSupport"))
);
const Privacy = Loadable(lazy(() => import("../pages/admin/supports/Privacy")));
const Feedback = Loadable(
  lazy(() => import("../pages/admin/supports/Feedback"))
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
      path: "help-support",
      element: <HelpnSupport />
    },
    {
      path: "privacy-policy",
      element: <Privacy />
    },
    {
      path: "feed-back",
      element: <Feedback />
    },
    {
      path: "icons/ant",
      element: <AntIcons />
    },
    {
      path: "category-details",
      element: <Category />
    },
    {
      path: "subcategory-details",
      element: <SubCategory />
    },
    {
      path: "product-details",
      element: <Product />
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
