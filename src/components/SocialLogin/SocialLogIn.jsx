// import useAuth from "../../hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";

// const SocialLogIn = ({ ForMWhere }) => {
//   const { googleLogin } = useAuth();
//   //location
//   const location = useLocation();
//   const navigate = useNavigate();
//   // const from = location.state?.from?.pathname || "/";
//   const handleGoogle = () => {
//     googleLogin()
//       .then((result) => {
//         const user = result.user;
//         const userData = { name: user.displayName, email: user.email };
//         fetch("http://localhost:5000/users", {
//           method: "POST",
//           headers: {
//             "content-type": "application/json",
//           },
//           body: JSON.stringify(userData),
//         }).then(() => {
//           navigate("/");
//         });
//       })
//       .catch(() => {});
//   };
//   return (
//     <div className=" text-center">
//       <button
//         className="btn bg_gradient_design text-white border-0 w-[300px] md:w-[600px] lg:w-[800px] mx-auto "
//         type="submit"
//         onClick={handleGoogle}
//       >
//         {ForMWhere} With Google
//       </button>
//     </div>
//   );
// };

// export default SocialLogIn;
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogIn = ({ ForMWhere }) => {
  const { googleLogin } = useAuth();
  //location
  const location = useLocation();
  const navigate = useNavigate();
  // const from = location.state?.from?.pathname || "/";
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const userData = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        }).then(() => {
          navigate("/");
        });
      })
      .catch(() => {});
  };
  return (
    <div className=" text-center">
      <button
        className="btn bg_gradient_design text-white border-0 w-[300px] md:w-[600px] lg:w-[800px] mx-auto "
        type="submit"
        onClick={handleGoogle}
      >
        {ForMWhere} With Google
      </button>
    </div>
  );
};

export default SocialLogIn;
