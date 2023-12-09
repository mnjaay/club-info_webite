import React, {  useState } from "react";
import logo from "../assets/images/Screenshot 2023-10-10 at 10-56-26 set info club.png";
// import {Link} from 'react-router-dom'
import flagFrance from "../assets/images/flagFrance.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
//import Projets from './projets';
//import Blogs from './blogs';
//import Events from './event';
// import { FiSun } from "react-icons/fi";
// import { BsFillMoonStarsFill } from "react-icons/bs";
// import { TypeAnimation } from 'react-type-animation';

function Header() {  

  const [buttonIcon, setButtonIcon] = useState(true);

  const clickIcon = () => {
    setButtonIcon(!buttonIcon);
  }; 
 
  return (
    <div className='fixed w-full z-20 mb-20'>
      <div className="flex items-center w-full z-20 flex-col">
        <nav
          className="bg-[#0A1A44]  z-20  shadow-xl text-gray-400 h-fit px-3 md:rounded-none rounded-xl md:px-12 md:py-3 py-2 flex items-center justify-between md:w-full w-[85%] md:mt-0 mt-3 "
          
        >
          {/* Logo  */}
          <div className="w-[65px] h-[65px] cover ">
            <img src={logo} alt="" />
          </div>
          {/* Nav Lg  */}
          <div className="text-xl md:flex hidden ">
            <ul className="flex gap-x-10 ">
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/">Accueil</a>
              </li>
               {/*  */}
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/Projets">Projets</a>
              </li>
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/Evenements">Evenements</a>
              </li>
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/Blogs">Blog</a>
              </li>
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/Ressources">Ressources</a>
              </li>
              <li className="w-fit h-fit px-2 py-2 rounded-lg hover:bg-gray-700">
                <a href="/Abouts">A propos</a>
              </li>
            </ul>
          </div>
          {/* Traduction */}
          <div className="flex gap-x-3 items-center ">  
              <button
              type="button"
              data-dropdown-toggle="language-dropdown-menu"
              className=" hidden md:inline-flex items-center gap-x-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer   bg-gray-700 dark:hover:text-white"
            >
              
              <img
                src={flagFrance}
                className="w-[25px] h-[25px] rounded-full border-white border-2"
                alt=""
              />{" "}
              Français (Fr)
            </button>
          </div>

          {/*Icon Hamburger Button*/}
          <div className="md:hidden flex" onClick={clickIcon}>
            {buttonIcon ? (
              <HiOutlineMenuAlt3
                className="text-white cursor-pointer"
                size={30}
              />
            ) : (
              <AiOutlineClose className="text-white cursor-pointer" size={30} />
            )}
          </div>
        </nav>
        {/* nav pour la version mobile  */}
        {/* Logo  */}
        <div
          className={
            !buttonIcon
              ? "flex mt-2  flex-col  items-center justify-between w-[80%] h-fit p-3 relative top-0 rounded-xl text-white bg-[#0A1A44] opacity-120   transition ease-out delay-700  "
              : "hidden opacity-0  top-10 "
          }
        >
          <div className="gap-x-3 flex w-[100%] justify-center items-center my-2">
            <img src={logo} className="w-[65px] h-[65px] cover" alt="" />
            <span className="flex flex-row text-xl">Set Info Club</span>
          </div>
          <div className="w-[95%] my-1 h-[0.2px] bg-gray-400"></div>
          {/* Nav mobile  */}
          <div className="text-xl my-2 flex  ">
            <ul className="flex  flex-col text-gray-400 items-center gap-y-10 ">
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/">Accueil</a>
              </li>
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/Projets">Projets</a>
              </li>
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/Evenements">Evenements</a>
              </li>
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/Blogs">Blog</a>
              </li>
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/Ressources">Ressources</a>
              </li>
              <li className="w-fit h-fit px-2 py-1 rounded-lg hover:bg-gray-700">
                <a href="/Abouts">A propos</a>
              </li>
            </ul>
          </div>
          {/* Traduction */}
          <div
            id="language-dropdown-menu"
            className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700"
          >
            <ul className="py-2 font-medium" role="none">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  {/* <div class="inline-flex items-center">
                  <img
                    src={flagUsa}
                    className="w-[25px] h-[25px] rounded-full border-white border-2"
                    alt=""
                  />
                  English (US)
                </div> */}
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className=" hidden md:inline-flex items-center gap-x-2 font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer   bg-gray-700 dark:hover:text-white"
          >
            <img
              src={flagFrance}
              className="w-[25px] h-[25px] rounded-full border-white border-2"
              alt=""
            />{" "}
            Français (Fr)
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
