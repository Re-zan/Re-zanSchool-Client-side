import { useForm } from "react-hook-form";
import { FaEnvelope, FaEye } from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../components/SocialLogin/SocialLogIn";

const Laogin = () => {
  //auth
  const { logIn } = useAuth();

  //states
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);

  //where to go
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //login start
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setError("");
    logIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(data);
  };

  return (
    <div className="my_container my-20">
      <Helmet>
        <title>Home | Login Page</title>
      </Helmet>{" "}
      <Heading
        title="Login Now"
        des="Join Re-zanSchool and embark on an extraordinary adventure of creativity and self-expression."
      ></Heading>
      <div className="border bg-slate-400 py-14">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px]  mx-auto">
              <input
                type="email"
                placeholder="Enter Your email"
                className="input rounded-none w-full "
                {...register("email", { required: true })}
              />
              <FaEnvelope className=" text-2xl mx-7 text-white"></FaEnvelope>
            </div>
            {errors.email?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}
          </div>

          {/* pasword  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px]  mx-auto">
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Enter Your password"
                className="input rounded-none w-full "
                {...register("password", {
                  required: true,
                })}
              />
              <FaEye
                className=" text-2xl mx-7 text-white"
                onClick={() => setShowPass(!showPass)}
              ></FaEye>
            </div>
            {errors.password?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}
          </div>
          <p className=" text-red-800 text-center py-3">{error}</p>
          <div className=" text-center">
            <button
              className="btn bg_gradient_design text-white border-0 w-[300px] md:w-[600px]  mx-auto "
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="text-center my-4">
            <Link
              className="link link-primary font-semibold tex-base"
              to="/register"
            >
              {" "}
              Doesn't Have Account Then Register
            </Link>
          </div>
        </form>
        <div className="divider">OR</div>
        <SocialLogIn ForMWhere="Login"></SocialLogIn>
      </div>
    </div>
  );
};

export default Laogin;
