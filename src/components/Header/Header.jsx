import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut();
  };
  const mainMenu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-medium font-fira">Home</li>
      </NavLink>
      <NavLink
        to="/instructors"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-medium font-fira">Instructors</li>
      </NavLink>
      <NavLink
        to="/our-classes"
        className={({ isActive }) =>
          isActive ? "text-[#c0392b]" : "text-black"
        }
      >
        <li className=" mx-3 text-2xl font-medium font-fira"> Classes</li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 py-6  my_container">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20"
          >
            {mainMenu}
          </ul>
        </div>
        <Link
          to="/"
          className="text-2xl md:text-4xl  font-bold text-design font-fira"
        >
          {" "}
          Re-ZanSchool
        </Link>
      </div>

      <div className="navbar-end  flex items-center">
        <div className="hidden lg:flex">
          {" "}
          <ul className="menu menu-horizontal px-1 ">{mainMenu}</ul>
        </div>
        {user ? (
          <>
            {" "}
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-[#c0392b]" : "text-black"
              }
            >
              <li className=" mx-3 text-2xl font-medium font-fira list-none">
                {" "}
                Dashboard
              </li>
            </NavLink>
            <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button
                    className="btn bg_gradient_design text-white "
                    onClick={handleLogout}
                  >
                    logout
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="btn bg_gradient_design text-white ">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
