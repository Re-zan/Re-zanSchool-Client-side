import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useAuth();

  if (user) {
    return children;
  }
  if (loader) {
    return (
      <>
        <div className=" w-36 mx-auto">
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      </>
    );
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
