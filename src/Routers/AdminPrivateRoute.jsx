// import { Navigate, useLocation } from "react-router-dom";
// import useAuth from "../hooks/useAuth";
// import useAdmin from "../hooks/useAdmin";

// const AdminPrivateRoute = ({ children }) => {
//   const { user, loader } = useAuth();
//   const [isLoading, isadmin] = useAdmin();
//   const location = useLocation();

//   if (user && isadmin) {
//     return children;
//   }
//   if (loader || isLoading) {
//     return (
//       <>
//         <div className=" w-36 mx-auto">
//           <span className="loading loading-dots loading-xs"></span>
//           <span className="loading loading-dots loading-sm"></span>
//           <span className="loading loading-dots loading-md"></span>
//           <span className="loading loading-dots loading-lg"></span>
//         </div>
//       </>
//     );
//   }
//   return <Navigate to="/login" replace state={{ from: location }}></Navigate>;
// };

// export default AdminPrivateRoute;
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isadmin, isLoading] = useAdmin();
  const location = useLocation();

  if (user && isadmin) {
    return children;
  }
  if (loading || isLoading) {
    return (
      <>
        {" "}
        <div className=" w-36 mx-auto">
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>{" "}
        </div>{" "}
      </>
    );
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
