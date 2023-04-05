import React, { useState } from "react";
import DlLogoWhite from "../assets/images/LogoThingWhite.png";
import { BsThreeDots } from "react-icons/bs";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleDropDownMenuClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  function handleDropDownItemClick() {
    setIsOpen(false);
  }

  return (
    <>
      <nav className="flex flex-row place-content-evenly fixed w-full top-0 z-10 bg-gradient-to-b from-black to-transparent">
        <div className="hidden sm:flex">
          <h2
            className="font-ralewayRegItal text-3xl sm:text-4xl lg:text-5xl my-auto tracking-wider 
        navbar-item_transformer navbar-item_colourshift"
          >
            <a href="#visualiser">Daniel Lee</a>
          </h2>
        </div>
        <div className="">
          <img
            src={DlLogoWhite}
            alt="Daniel Lee's logo"
            color="white"
            className="h-10 w-10 lg:h-16 lg:w-16 mx-auto my-4
        navbar-item_transformer"
          ></img>
        </div>
        <div className="hidden sm:flex flex-row place-content-evenly">
          <div className="m-auto -mr-4 lg:-mr-12 flex flex-row ">
            <a href="#discography">
              <h4 className="navbar-item navbar-item_transformer navbar-item_colourshift">
                Discography
              </h4>
            </a>
            <a href="#epk">
              <h4 className="navbar-item navbar-item_transformer navbar-item_colourshift">
                EPK
              </h4>
            </a>
          </div>
        </div>
      </nav>
      <div
        className="fixed top-4 right-4 flex z-10 "
        onClick={handleDropDownMenuClick}
      >
        <i className="block sm:hidden navbar-item m-4 my-auto text-4xl navbar-item_transformer">
          <BsThreeDots color="white" />
        </i>
      </div>
      <nav
        className={`fixed right-4 z-10 transition-transform duration-300 [text-shadow:_2.5px_2.5px_10px_rgb(0_0_0_/_100%)] ${
          isOpen ? "dropdown-visible-true" : "dropdown-visible-false"
        } `}
      >
        <ul className="text-right dropdown-menu font">
          <a href="#visualiser" onClick={handleDropDownItemClick}>
            <li>Home -</li>
          </a>
          <a href="#discography" onClick={handleDropDownItemClick}>
            <li>Discography -</li>
          </a>
          <a href="#epk" onClick={handleDropDownItemClick}>
            <li>Epk -</li>
          </a>
        </ul>
      </nav>
    </>
  );
};
