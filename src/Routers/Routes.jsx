import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import OurClasses from "../Pages/OurClasses/OurClasses";
import Login from "../Pages/LoginPage/Laogin";
import Regisert from "../Pages/Register/Regisert";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyClasses from "../Pages/Dashboard/Student/MyClasses/MyClasses";
import MyEnrolledClasses from "../Pages/Dashboard/Student/MyEnrolledClasses/MyEnrolledClasses";
import ManageClasses from "../Pages/Dashboard/AdminDash/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/AdminDash/ManageUsers/ManageUser";
import DashBoard from "../Pages/Dashboard/DashBoard";
import AddClass from "../Pages/Dashboard/InsTtructors/AddClass/AddClass";
import InstructorClasses from "../Pages/Dashboard/InsTtructors/InstructorClasses/InstructorClasses";
import AdminPrivateRoute from "./AdminPrivateRoute";

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
        element: <Instructors></Instructors>,
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
  {
    path: "dashboard",
    element: <DashBoardLayout></DashBoardLayout>,
    children: [
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      //admin routess
      {
        path: "manage_classes",
        element: (
          <AdminPrivateRoute>
            <ManageClasses></ManageClasses>
          </AdminPrivateRoute>
        ),
      },
      {
        path: "manage_user",
        element: <ManageUser></ManageUser>,
      },
      //instructor routess
      {
        path: "add_class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my_classes",
        element: <InstructorClasses></InstructorClasses>,
      },
      //student routes
      {
        path: "my_selected_classes",
        element: <MyClasses></MyClasses>,
      },
      {
        path: "my_enrolledment_classes",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
    ],
  },
]);
export default router;
