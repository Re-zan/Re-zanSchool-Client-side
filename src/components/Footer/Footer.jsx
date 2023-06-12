import { Link, NavLink } from "react-router-dom";
import { FaEnvelopeOpen, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import fb from "../../assets/icons/fb.png";
import insta from "../../assets/icons/insta_.png";
import twitter from "../../assets/icons/twitter.png";

const Footer = () => {
  //menu
  const mainmenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-white"
        }
      >
        <li className=" my-3 text-xl font-semibold">Home</li>
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-white"
        }
      >
        <li className=" my-3 text-xl font-semibold">Instructors</li>
      </NavLink>
      <NavLink
        to="/our-classes"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-white"
        }
      >
        <li className=" my-3 text-xl font-semibold"> Classes</li>
      </NavLink>
    </>
  );
  return (
    <div className="bg-gray-700 ">
      <footer className="footer px-5 lg:px-0  py-28  my_container">
        <div>
          <Link to="/">
            {" "}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-2xl md:text-4xl  mt-4 font-bold text-design "
              >
                {" "}
                Re-ZanSchool
              </Link>
            </div>
          </Link>
          <p className=" w-[200px] lg:w-[400px] my-6 text-sm text-white ">
            {`Step into the world of Re-zanSchool, where art and craft intertwine
            to create a tapestry of inspiration. Immerse yourself in our virtual
            sanctuary, where you'll discover a treasure trove of tutorials,
            handpicked supplies, and a supportive community.`}
          </p>

          <div className="  flex  w-44">
            <Link to="https://www.facebook.com/">
              <img
                src={fb}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>
            <Link to="https://twitter.com/">
              <img
                src={twitter}
                alt="facebook"
                className="object-cover w-10 bg-slate-50 rounded-full mr-4 p-2"
              />
            </Link>

            <Link to="https://www.instagram.com/">
              {" "}
              <img
                src={insta}
                alt="facebook"
                className="object-cover w-12 bg-slate-50 rounded-full mr-4 p-3"
              />
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white  mt-6 mb-5">
            UseFul Links
          </h2>
          <ul>{mainmenu}</ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white mt-6 mb-5">
            Contact us
          </h2>
          <div className="flex items-center justify-between text-white ">
            <FaPhoneAlt className="text-[#911f12] mr-4 text-xl"></FaPhoneAlt>
            <p className="text-base">+ 018834344546</p>{" "}
          </div>
          <div className="flex items-center justify-between text-white my-3">
            <FaEnvelopeOpen className="text-[#911f12] mr-4 text-xl"></FaEnvelopeOpen>
            <p className="text-base">info@gamil.com</p>{" "}
          </div>
          <div className="flex items-center justify-between text-white ">
            <FaLocationArrow className="text-[#911f12] mr-4 text-xl"></FaLocationArrow>
            <p className="text-base">Oxygen Chittagong</p>{" "}
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 text-white bg-gray-800 py-8">
        <div>
          <p className="text-lg">
            Copyright © 2023 - All right reserved by{" "}
            <span className="logo text-2xl"> Re-ZanSchool</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
