import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const mainMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-semibold">Home</li>
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-semibold">Instructors</li>
      </NavLink>
      <NavLink
        to="/our-classes"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-semibold"> Classes</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 my_container my-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {mainMenu}
          </ul>
        </div>
        <Link
          to="/"
          className="text-4xl text-transparent  font-bold bg-clip-text bg-gradient-to-r from-[#c0392b] to-[#8e44ad]"
        >
          {" "}
          Re-ZanSchool
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex items-center">
        <ul className="menu menu-horizontal px-1 ">{mainMenu}</ul>
        <a className="btn bg-gradient-to-r from-[#c0392b] to-[#8e44ad] text-white">
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
