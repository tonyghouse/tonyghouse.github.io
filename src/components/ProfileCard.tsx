import React, { useContext } from 'react'
import SignDark from "../assets/svgs/sign-dark.svg";
import SignLight from "../assets/svgs/sign-light.svg";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";

function ProfileCard() {
    const themeContext = useContext<IThemeContextType>(ThemeContext);

  return (
   <>
     
     <div className="hidden md:flex h-[40%] w-[100%] flex-col items-center justify-center md:h-full ">
      
      <img
        src={`${themeContext.themeMode === "dark" ? SignLight : SignDark}`}
        className="w-80 h-30 "
        alt="sign"
      />
      <div
        className="slate font-[330] leading-normal  tracking-tight
                    opacity-60 text-[0.5rem] lg:text-2xl "
      >
        tonyghouseofficial@gmail.com
      </div>
    </div>
   </>
  )
}

export default ProfileCard