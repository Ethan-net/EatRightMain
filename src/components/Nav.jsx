import React from "react";
import Logo from "../assets/LOGO.png";
import "../App.css";

function Nav() {
  return (
    <div className="fixed top-0 left-0 bg-white w-[100%] z-50 navFont flex items-center justify-between py-2 px-10">
      <div>
        <img className="w-10" src={Logo} alt="logo" />
      </div>
      <ul className="flex gap-5 navfontList ">
        <li>MENU</li>
        <li>FINE DINING</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className=" navfontList flex items-center gap-2 border-[1px] p-1 border-mainyellow">
        <button className="text-mainyellow">RESERVATIONS </button>
        <hr className="border-[1px] w-7 border-mainyellow" />
      </div>
    </div>
  );
}

export default Nav;
