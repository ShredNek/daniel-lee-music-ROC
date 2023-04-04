import React from "react";
import DlLogoWhite from "../assets/images/LogoThingWhite.png";
import { BsThreeDots } from "react-icons/bs";

export const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-row fixed w-full top-0 z-10 bg-gradient-to-b from-black to-transparent">
      <div className="min-w-[42%] bg-blue- flex">
        <h2
          className="font-ralewayRegItal text-3xl sm:text-4xl lg:text-5xl my-auto ml-12 lg:ml-32 sm:ml-16 tracking-wider 
        navbar-item_transformer navbar-item_colourshift"
        >
          <a href="#visualiser">Daniel Lee</a>
        </h2>
      </div>
      <div className="m-auto w-full">
        <img
          src={DlLogoWhite}
          alt="Daniel Lee's logo"
          color="white"
          className="h-10 w-10 lg:h-16 lg:w-16 mx-auto my-4
        navbar-item_transformer"
        ></img>
      </div>
      <div className="flex flex-row min-w-[42%] bg-green-">
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
        <div className="bg-purple- m-auto flex mr-auto">
          <i className="block sm:hidden navbar-item m-4 my-auto text-4xl navbar-item_transformer">
            <BsThreeDots color="white" />
          </i>
        </div>
      </div>
    </nav>
  );
};
