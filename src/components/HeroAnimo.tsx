import React, { useContext } from "react";
import HeroBannerLightImage from "../assets/images/hero-banner-image-light.png";
import HeroBannerDarkImage from "../assets/images/hero-banner-image-dark.png";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
// className=" object-contain h-full w-full "
function HeroAnimo() {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  return (
    <>
     


<AnimatePresence >
    <motion.img className=" object-contain h-full w-full "
      key={`${themeContext.themeMode === "dark" ? "dark-hero-animo" : "light-hero-animo" }`}
      src={`${themeContext.themeMode === "dark" ? HeroBannerDarkImage : HeroBannerLightImage }`}
      initial={{ x: 100, opacity: 0 }}
      transition= {{ duration: 1 }}
      animate={{ x: 0,y:0, opacity: 1 }}
     
    />
  </AnimatePresence>

         
    </>
  );
}

export default HeroAnimo;
