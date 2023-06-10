import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import OurClasses from "../Pages/OurClasses/OurClasses";
import Login from "../Pages/LoginPage/Laogin";
import PrivateRoute from "./PrivateRoute";
import Regisert from "../Pages/Register/Regisert";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: (
          <PrivateRoute>
            <Instructors></Instructors>
          </PrivateRoute>
        ),
      },
      {
        path: "our-classes",
        element: <OurClasses></OurClasses>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Regisert></Regisert>,
      },
    ],
  },
]);
export default router;
