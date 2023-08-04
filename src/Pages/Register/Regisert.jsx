import { useForm } from "react-hook-form";
import {
  FaCamera,
  FaEnvelope,
  FaEye,
  FaPhoneAlt,
  FaUserAlt,
} from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../components/SocialLogin/SocialLogIn";

//register
const Regisert = () => {
  //auth
  const { creatUser, profile } = useAuth();

  //location
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  //state
  const [error, setError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showPassconfrim, setShowPassconfrim] = useState(false);

  //usefrom
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  //register start
  const onSubmit = (data) => {
    setError("");
    if (data.password !== data.confrim_password) {
      setError("Password Doesn't match");
    } else {
      creatUser(data.email, data.password)
        .then((result) => {
          const user = result.user;

          profile(user, data.name, data.photo);
          const userData = {
            name: data.name,
            email: user.email,
            number: data.number,
            photo: data.photo,
            password: data.password,
          };

          fetch("https://re-school-camp-server.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(userData),
          })
            .then(() => {
              reset();
              navigate(from, { replace: true });
            })
            .catch((error) => {
              setError(error.message);
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
    }
  };

  return (
    <div className="my_container my-20">
      <Helmet>
        <title>Home | Register Page</title>
      </Helmet>{" "}
      <Heading
        title="Register Now"
        des="Join Re-zanSchool and embark on an extraordinary adventure of creativity and self-expression."
      ></Heading>
      <div className="border bg-slate-400 py-14">
        {" "}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* name  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="text"
                placeholder="Enter Your name"
                className="input rounded-none w-full "
                {...register("name", { required: true })}
              />
              <FaUserAlt className=" text-2xl mx-7 text-white"></FaUserAlt>
            </div>
            {errors.name?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}
          </div>
          {/* photo url  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="text"
                placeholder="Enter Your photo url"
                className="input rounded-none w-full "
                {...register("photo", { required: true })}
              />
              <FaCamera className=" text-2xl mx-7 text-white"></FaCamera>
            </div>
            {errors.photo?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}
          </div>
          {/* email  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
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
          {/* phone number  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type="tel"
                placeholder="Enter Your phone number"
                className="input rounded-none w-full "
                {...register("number", {
                  required: true,

                  pattern:
                    /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                })}
              />
              <FaPhoneAlt className=" text-2xl mx-7 text-white"></FaPhoneAlt>
            </div>
            {errors.number?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}

            {errors.number?.type === "pattern" && (
              <p className=" text-red-800 text-center py-3">
                Phone Number must be validated
              </p>
            )}
          </div>
          {/* pasword  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type={`${showPass ? "text" : "password"}`}
                placeholder="Enter Your password"
                className="input rounded-none w-full "
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
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
            {errors.password?.type === "minLength" && (
              <p className=" text-red-800 text-center py-3">
                Passowrd is less than 6 characters
              </p>
            )}
            {errors.password?.type === "pattern" && (
              <p className=" text-red-800 text-center py-3">
                Passowrd doesn't have a capital letter and a special character
              </p>
            )}
          </div>
          {/* confrim password  */}
          <div className="form-control w-full my-4">
            <div className=" flex items-center justify-evenly bg-red-700 w-[300px] md:w-[600px] lg:w-[800px] mx-auto">
              <input
                type={`${showPassconfrim ? "text" : "password"}`}
                placeholder="Enter Your confrim password"
                className="input rounded-none w-full "
                {...register("confrim_password", {
                  required: true,
                })}
              />
              <FaEye
                className=" text-2xl mx-7 text-white"
                onClick={() => setShowPassconfrim(!showPassconfrim)}
              ></FaEye>
            </div>
            {errors.confrim_password?.type === "required" && (
              <p className=" text-red-800 text-center py-3">
                This feild cann't be empty
              </p>
            )}
          </div>
          <p className=" text-red-800 text-center py-3">{error}</p>
          <div className=" text-center">
            <button
              className="btn bg_gradient_design text-white border-0 w-[300px] md:w-[600px] lg:w-[800px] mx-auto "
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="text-center my-4">
            <Link
              className="link link-primary font-semibold tex-base"
              to="/login"
            >
              {" "}
              Already Have An Account then Login
            </Link>
          </div>
        </form>
        <div className="divider">OR</div>
        <SocialLogIn ForMWhere="Register "></SocialLogIn>
      </div>
    </div>
  );
};

export default Regisert;
