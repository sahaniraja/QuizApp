import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layout/MinimalLayout";

// render - login
const AuthLogin = Loadable(lazy(() => import("../pages/authentication/Login")));
const AuthRegister = Loadable(
  lazy(() => import("../pages/authentication/Register"))
);
const AuthResetPassword = Loadable(
  lazy(() => import("../pages/authentication/ForgetPassword"))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />
    },
    {
      path: "register",
      element: <AuthRegister />
    },
    {
      path: "reset-password",
      element: <AuthResetPassword />
    }
  ]
};

export default LoginRoutes;
