import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { NavLink } from "react-router-dom";

const navigation = [{ name: "Dashboard", href: "#", current: true }];

function Navbar() {
  return (
    <nav
      className="
   relative
   w-full
   flex flex-wrap
   items-center
   justify-between
   py-4
   bg-gray-100
   text-gray-500
   hover:text-gray-700
   focus:text-gray-700
   shadow-lg
   navbar navbar-expand-lg navbar-light app-header
   "
    >
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div
          className="collapse navbar-collapse flex-grow items-center"
          id="navbarSupportedContent"
        >
          <div className="app-header-container justify-center">
            {/* <div className="grid grid-cols-1 justify-center"> */}
            <NavLink to="/">
              <span className="app-header-logo">
                <img src="../images/logo.png" />
              </span>
              <span className="app-header-title">
                <span className="app-color-accent">Home</span>
                <b>Page</b>
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
