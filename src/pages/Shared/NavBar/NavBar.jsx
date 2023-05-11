import ActiveLink from "./ActiveLink";
import { HiOutlineShoppingBag, HiOutlineSearch } from "react-icons/hi";
import logo from '../../../assets/logo.svg'
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about">About</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/services">Services</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/blog">Blog</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/contact">Contact</ActiveLink>
            </li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="nav-logo" />
            </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/about">About</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/services">Services</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </li>
          <li>
            <ActiveLink to="/contact">Contact</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
       <div className="md:flex items-center gap-5">
        <HiOutlineShoppingBag className="text-2xl"/>
        <HiOutlineSearch className="text-2xl"/>
        <button className="btn btn-outline btn-error">Appointment</button>
       </div>
      </div>
    </div>
  );
};

export default NavBar;
