import React , {useContext} from "react";
import MeilisearchIcon from "../assets/icons/svg/meilisearch.svg";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import {FaOsi} from "react-icons/fa";

function SourceRepo({ title, description, links, tags }:any) {
    const themeContext = useContext<IThemeContextType>(ThemeContext);
  return (
    <>
      <div className={` ${ themeContext.themeMode === "dark" ? "shadow-[#151515]" : "shadow-gray-400"}
        flex flex-col p-8 rounded shadow-2xl div-back `}>
        <div className="flex items-center justify-between">
          <FaOsi className="text-3xl accent"/>
          <div className="flex items-center slate">
            {(links).map((l:any, i:any) => {
              return (
                <a
                  key={i}
                  href={l.url}
                  target="_blank" rel="noreferrer" >
                 <span className={`hover-accent ${l} ${
                    i === links.length - 1 ? "" : "mx-6"
                  }`} >
                    {l.icon}
                  </span>
                  </a>
      
              );
            })}
          </div>
        </div>
        <h4 className="slate pt-6 cursor-default font-[600] font-Poppins">{title}</h4>
        <p className={`slate pt-2 text-sm cursor-default font-Inter`}>
          {description}
        </p>
        <ul className="flex flex-wrap items-center mt-6 text-sm cursor-default slate opacity-60 font-monospace">
          {tags.map((t:any, i:any) => {
            return (
              <li key={i} className="mr-5 whitespace-nowrap">
                {t}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default SourceRepo;
