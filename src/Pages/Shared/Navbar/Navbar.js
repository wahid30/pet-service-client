import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import "../../../GlobalCss/Global.css";
import logo from "../../../images/projectLogo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="banner-bg global-color">
      <div className="navbar w-9/12 mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Service</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-[100px]" src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Service</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <button onClick={handleLogOut} className="btn btn-accent">
                LogOut
              </button>
            </>
          ) : (
            <Link to="Login" className="btn btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
