import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const DashBoardLayout = () => {
  const { user, logOut } = useAuth();

  //logut
  const handleLogout = () => {
    logOut();
  };

  //menu
  const mainmenu = (
    <>
      <NavLink
        to="/dashboard/manage_classes"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">
          Manage Classes
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/manage_user"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">
          Manage Users
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/add_class"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">Add A Class</li>
      </NavLink>
      <NavLink
        to="/dashboard/my_classes"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">My Classes</li>
      </NavLink>
      <NavLink
        to="/dashboard/my_selected_classes"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">
          My Selected Classes
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/my_enrolledment_classes"
        className={({ isActive }) =>
          isActive ? "text-[#a72112]" : "text-white"
        }
      >
        <li className=" my-4 text-sm md:text-2xl font-semibold">
          My Enrolled Classes
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="my_container">
      {/* header start  */}
      <header>
        <div className="navbar bg-[#7da6b9] p-6 ">
          <div className="navbar-start">
            <Link
              to="/"
              className="text-2xl md:text-4xl  font-bold text-design font-fira"
            >
              {" "}
              Re-ZanSchool
              <br></br>
              Dashboard
            </Link>
          </div>

          <div className="navbar-end  flex items-center">
            <div className="dropdown dropdown-end z-50">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-80 rounded-full">
                  <img src={user?.photoURL} className="w-[300px]" />
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
          </div>
        </div>
      </header>

      {/* main content */}
      <main>
        <div className="grid grid-cols-9 min-h-screen">
          <div className=" col-span-2 bg-[#5e8699]">
            <div className="text-center my-5">
              <ul>{mainmenu}</ul>
            </div>
          </div>
          <div className="col-span-7  ">
            <Outlet></Outlet>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashBoardLayout;