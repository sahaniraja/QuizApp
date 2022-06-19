import MainLayout from "layout/MainLayout";

// ==============================|| FRONT ROUTING ||============================== //

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
      path: "sample-page",
      element: <SamplePage />
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
    }
  ]
};

export default MainRoutes;
