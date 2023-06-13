import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useInstruct from "../hooks/useInstruct";

const InstructorPrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isisInstructor, isLoading] = useInstruct();
  const location = useLocation();

  if (user && isisInstructor) {
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

export default InstructorPrivateRoute;
