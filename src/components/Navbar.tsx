import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import {FaAdjust,FaAlignJustify} from "react-icons/fa";
import {RxSun,RxMoon} from "react-icons/rx";
import TonyLightLogo from "../assets/svgs/tonylightlogo.svg";
import TonyDarkLogo from "../assets/svgs/tonydarklogo.svg";

function Navbar() {
  const [sideMenu, setSideMenu] = useState(false);

  const themeContext = useContext<IThemeContextType>(ThemeContext);

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu);
  };
  
  const toggleTheme = () => {
    themeContext.toggleThemeMode();
  };

  const navlinks = [
    { id: "01", name: "Skills", url: "skills" },
    { id: "02", name: "Experience", url: "experience" },
    { id: "03", name: "Projects", url: "projects" },
    { id: "04", name: "Contributions", url: "contributions" },
  ];

  return (
    <nav
      id="navigation"
      className="flex h-[5rem] w-full items-center justify-between px-4 md:px-6  "
    >
      <a href="/" className="z-[100] cursor-pointer">
        <img
                src={themeContext.themeMode ==="dark" ? TonyLightLogo : TonyDarkLogo} 
                className="w-8 h-8 mx-auto mb-1 md:mb-2 md:w-14 md:h-14 "
                alt="logo"
              />
      </a>
      <div
        className={`${sideMenu ? "flex" : "hidden md:flex"} 
        fixed top-0  left-0 z-[10] h-full w-full 
        flex-col items-end justify-center
        p-6 backdrop-blur-md 
        md:relative md:h-auto md:w-auto md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0`}
      >
        <ul
          className="slate font-[440] mr-2 flex flex-col font-monospace 
                       text-[1rem] leading-[2rem] tracking-[0.17rem]
                       md:flex-row md:text-[0.95rem] md:leading-[3rem]"
        >
          {navlinks.map((navLink) => (
            <li key={navLink.id} className="px-5 py-3 md:px-4 md:py-0 ">
              <Link
                onClick={toggleSideMenu}
                className="hover-accent"
                to={navLink.url}
                spy={true}
                smooth={true}
                duration={1000}
              >
                <span className="mr-2 accent bold">{navLink.id}</span>
                <span className="bold">{navLink.name}</span>
              </Link>
            </li>
          ))}
          <li key="theme" className="px-5 py-3 md:px-4 md:py-0 ">
            <button onClick={toggleTheme}>
             {themeContext.themeMode ==="dark" ?
              <RxMoon />
             : <RxSun />}
             </button>

            
          </li>
        </ul>
      </div>
      <FaAlignJustify
        onClick={toggleSideMenu}
        className={`
                    z-[100] w-[1rem] cursor-pointer text-center text-xl md:hidden accent`}
      />
    </nav>
  );
}

export default Navbar;
