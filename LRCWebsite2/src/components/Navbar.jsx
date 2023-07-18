import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-blacklite opacity-25 pointer-events-none">
        <p className="mx-5 pointer-events-none text-[40px] text-blacklite ml-10">Lightning Rock Cattle</p>
      </div>
      <div className="text-blacklite flex justify-between items-center mx-5 ml-10 mr-12">
        <Link className="text-[40px] hover:text-secondary transition-colors duration-200 w-fit cursor-pointer" to={'/'}> Lightning Rock Cattle</Link>
        <div className="flex flex-row gap-12 text-[22px]">
          <Link className="navbutton" to="/">
            Home
          </Link>
          <Link className="navbutton" to="/shop">
            Shop
          </Link>
          <Link className="navbutton" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
