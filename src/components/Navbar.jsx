import React, { useEffect, useState } from "react";
import { CiDark, CiLight, CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
 
import { Link } from "react-router-dom";
import Login from "./Login";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/course"}>Course</Link>
      </li>
      <li>
        <Link to={"/"}>Contact</Link>
      </li>
      <li>
        <Link to={"/"}>About</Link>
      </li>
    </>
  );
  return (
    <div
      className={`${
        sticky
          ? "shadow-md bg-base-100 duration-300 transition-all ease-in-out "
          : ""
      } max-w-screen-2xl container mx-auto md:px-20 px-4 flex-1 fixed top-0 right-0 left-0 z-50 dark:bg-slate-800 dark:text-white`}
    >
      <div className="navbar dark:bg-slate-800 dark:text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="  lg:hidden pr-">
              <CiMenuFries className="text-xl font-bold text-black" />
            </div>
            <ul
              tabIndex={0}
              className="text-gray-400 font-medium text-[16px]  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>

          <a className="text-2xl font-bold cursor-pointer">
            <span className="text-indigo-400 text-3xl">B</span>ook Store
          </a>
        </div>
        <div className="navbar-end space-x-6">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-medium text-gray-400 text-[16px]">
              {navItems}
            </ul>
          </div>

          <div className="hidden md:block">
            <label className=" border-b dark:border-slate-500 focus:outline-none flex items-center gap-2">
              <input
                type="text"
                className="focus:outline-none dark:bg-slate-800"
                placeholder="Search...."
              />
              <IoSearchOutline />
            </label>
          </div>
          <div className="flex justify-center ">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />
              <CiLight
                className="swap-off fill-current w-6 h-6"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              />
              <CiDark
                className="swap-on fill-current w-6 h-6"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              />
            </label>
          </div>
          <div className="">
            <Link
              className="bg-black text-white py-2 px-6 rounded-md cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Login
            </Link>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
