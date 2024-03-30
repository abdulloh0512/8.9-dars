import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import DefaultLayout from "../Layout/DefauldLayout";
import Library from "../Layout/Library";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
  },
  {
    path: "/",
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "library",
        element: <Library />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
  },
]);
export default routes;
