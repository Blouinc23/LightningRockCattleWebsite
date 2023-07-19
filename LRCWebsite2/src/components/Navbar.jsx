import React from "react";
import { Link } from "react-router-dom";
import MenuOpen from "../assets/splashArt/MenuOpen.png";
import MenuClose from "../assets/splashArt/MenuClose.png";
import { useState, useEffect } from "react";

function Navbar(props) {
  const [menuImage, setMenuImage] = useState(MenuOpen);
  const [menuOpen, setMenuOpen] = useState(false);

  function menuClickHandler() {
    if (menuImage === MenuOpen) {
      setMenuImage(MenuClose);
    } else {
      setMenuImage(MenuOpen);
    }
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    if (menuOpen) {
      document.getElementById("menu").classList.remove("hidden")
      document.getElementById("menu").classList.add("animate-slideLeft");
      document.getElementById("menu").classList.remove("animate-slideRight");
    } else {
      document.getElementById("menu").classList.remove("animate-slideLeft");
      document.getElementById("menu").classList.add("animate-slideRight");
      setTimeout( () => {
        document.getElementById("menu").classList.add("hidden")
      },400) 
    }
  }, [menuOpen]);

  return (
    <>
      <div className="absolute w-full bg-gradient-to-b from-blacklite opacity-25 pointer-events-none">
        <p className="mx-5 pointer-events-none text-[40px] text-blacklite ml-10">
          {""}
        </p>
      </div>
      <div className="text-blacklite flex lg:justify-between justify-between lg:items-center items-start lg:mx-5 ml-3 lg:ml-10 lg:mr-12 relative">
        <Link
          className="lg:text-[40px] text-[24px] hover:text-secondary transition-colors duration-200 w-fit cursor-pointer"
          to={"/"}
        >
          {" "}
          Lightning Rock Cattle
        </Link>
        <div className="lg:translate-x-[0%] animate-none lg:mr-0 mr-3 flex flex-col items-end" id="menuRight">
          <div
            className="lg:hidden mt-[5px] animate-none"
            onClick={menuClickHandler}
          >
            <img
              src={menuImage}
              alt="Menu Icon"
              id="menuIcon"
              className="w-[30px] h-[30px]"
            />
          </div>
          <div
            className="lg:flex lg:flex-row lg:gap-12 text-[22px] lg:bg-transparent flex flex-col gap-6 items-end transition-all duration-200 lg:mt-0 mt-4 lg:static absolute top-8 right-2 animate-none hidden lg:animate-none lg:translate-x-[0%]"
            id="menu"
          >
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
      </div>
    </>
  );
}

export default Navbar;
