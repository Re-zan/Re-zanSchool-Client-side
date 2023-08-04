import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Instructors from "../Pages/Instructors/Instructors";
import OurClasses from "../Pages/OurClasses/OurClasses";
import Login from "../Pages/LoginPage/Laogin";
import Regisert from "../Pages/Register/Regisert";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyClasses from "../Pages/Dashboard/Student/MyClasses/MyClasses";
import ManageClasses from "../Pages/Dashboard/AdminDash/ManageClasses/ManageClasses";
import ManageUser from "../Pages/Dashboard/AdminDash/ManageUsers/ManageUser";
import DashBoard from "../Pages/Dashboard/DashBoard";
import AddClass from "../Pages/Dashboard/InsTtructors/AddClass/AddClass";
import InstructorClasses from "../Pages/Dashboard/InsTtructors/InstructorClasses/InstructorClasses";
import AdminPrivateRoute from "./AdminPrivateRoute";
import InstructorPrivateRoute from "./InstructorPrivateRoute";
import FeedbackModal from "../Pages/Dashboard/AdminDash/ManageClasses/FeedbackModal";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Student/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "manage_classes/:id",
        element: <FeedbackModal></FeedbackModal>,
        loader: ({ params }) =>
          fetch(
            `https://re-school-camp-server.vercel.app/getclasses/${params.id}`
          ),
      },
      {
        path: "manage_user",
        element: (
          <AdminPrivateRoute>
            <ManageUser></ManageUser>
          </AdminPrivateRoute>
        ),
      },

      //instructor routess
      {
        path: "add_class",
        element: (
          <InstructorPrivateRoute>
            <AddClass></AddClass>
          </InstructorPrivateRoute>
        ),
      },
      {
        path: "my_classes",
        element: (
          <InstructorPrivateRoute>
            <InstructorClasses></InstructorClasses>
          </InstructorPrivateRoute>
        ),
      },

      //student routes
      {
        path: "my_selected_classes",
        element: <MyClasses></MyClasses>,
      },

      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
    ],
  },
]);
export default router;
