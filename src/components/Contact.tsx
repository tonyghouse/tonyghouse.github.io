import React, { useContext } from "react";
import SignDark from "../assets/svgs/sign-dark.svg";
import SignLight from "../assets/svgs/sign-light.svg";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";

function Contact() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);

  return (
    <>
      <div
        id="contacts"
        className="section-padding section-margin flex w-full flex-col  items-center "
      >
        <div className="header-line flex w-full items-center pb-8">
          <span className="accent mr-4 font-monospace text-xl">05.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600] font-Poppins">
            Contact
          </h3>
        </div>

        <div
          id="contact_box"
          className={` ${
            themeContext.themeMode === "dark" ? "shadow-[#151515]" : "shadow-gray-400"
          }
        div-back relative flex  h-[34rem] w-full flex-col items-center rounded p-8 shadow-2xl md:h-[30rem]  md:flex-row `}
        >
          <div className="hidden md:flex h-[40%] w-[100%] flex-col items-center justify-center md:h-full ">
      
            <img
              src={`${themeContext.themeMode === "dark" ? SignLight : SignDark}`}
              className="w-80 h-30 "
              alt="sign"
            />
            <div
              className="slate font-[330] leading-normal  tracking-tight
                          opacity-60 text-[0.6rem] lg:text-2xl "
            >
              ghousek1@outlook.com
            </div>
          </div>

          <div className="flex h-full w-[100%] flex-col">
            <div className="slate pb-3 text-[1.2rem] leading-normal md:text-[1.5rem] font-Poppins">
              Drop a Message
            </div>

            <div className="flex flex-1 flex-col  items-start justify-evenly">
              <input
                type="text"
                placeholder="Name"
                className={`${themeContext.themeMode === "dark" ? "bg-[#0c0c0c] placeholder-[#fdfdfd] " : "   "} 
                      w-[95%] border p-2 md:w-[85%] md:p-3`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`${themeContext.themeMode === "dark" ? "bg-[#0c0c0c] placeholder-[#fdfdfd] " : "   "} 
                w-[95%] border p-2 md:w-[85%] md:p-3`}
              />
              <textarea
                // type="text"
                placeholder="Message"
                className={`${themeContext.themeMode === "dark" ? "bg-[#0c0c0c] placeholder-[#fdfdfd] " : "   "} 
                      w-[95%] border p-4 md:w-[85%] md:p-5 resize-none`}
              />
              <button className="slate border px-6 py-2 ">Send</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
