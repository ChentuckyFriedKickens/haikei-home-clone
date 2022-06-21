import React from "react";

import logo from "../logo.png";

const Navbar = () => {
  return (
    <div className="navHolder h-20 px-20">
      <nav className="w-screen bottom-line">
        <img src={logo} className="fill-white hover:cursor-pointer" />
      </nav>
    </div>
  );
};

export default Navbar;
