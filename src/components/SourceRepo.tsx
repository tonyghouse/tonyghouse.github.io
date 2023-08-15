import React, { useContext } from "react";
import MeilisearchIcon from "../assets/icons/svg/meilisearch.svg";
import { IThemeContextType, ThemeContext } from "../context/ThemeContext";
import { FaOsi } from "react-icons/fa";
import { BsStar } from "react-icons/bs";
import { BiGitMerge } from "react-icons/bi";
import {MdArrowRight} from "react-icons/md";

function SourceRepo({ title, description, links, tags, prList }: any) {
  const themeContext = useContext<IThemeContextType>(ThemeContext);
  return (
    <>
      <div
        className={` ${
          themeContext.themeMode === "dark"
            ? "shadow-[#212121]"
            : "shadow-gray-400"
        }
        flex flex-col p-8 shadow-2xl div-back `}
      >
        <div className="flex items-center justify-between">
          <FaOsi className="text-3xl accent" />
          <div className="flex items-center slate">
            {links.map((l: any, i: any) => {
              return (
                <a key={i} href={l.url} target="_blank" rel="noreferrer">
                  <span
                    className={`hover-accent ${l} ${
                      i === links.length - 1 ? "" : "mx-6"
                    }`}
                  >
                    {l.icon}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
        <h4 className="slate pt-6 cursor-default font-[600] font-Poppins">
          {title}
        </h4>
        <p className={`slate pt-2 text-sm cursor-default font-Inter`}>
          {description}
        </p>

        <div className="mt-6 flex-1">
          <div className="slate pb-2 text-[0.95rem] leading-[1.3rem] cursor-default font-[520] font-Inter">
            Contributions:
          </div>
          <div className="flex flex-col items-start cursor-default slate font-monospace font-[400]">
            {prList.map((pr: any, i: any) => {
              return (
                <div
                  key={i}
                  className="flex flex-col  mb-2 w-full"
                >
                  <a href={pr.prLink} target="_blank">
                    <div className="flex flex-col md:flex-row w-full items-center ">
                      <div className="w-full md:w-[75%]  text-[0.95rem] leading-[1.3rem] hover:underline
                      whitespace-nowrap overflow-hidden text-ellipsis">
                       <MdArrowRight className="inline" /> {pr.title}
                      </div>
                      <div className="w-full md:w-[25%] md:text-end pr-5 mt-2 ml-1 md:mt-none md:ml-none ">
                      <span className="text-[#ff1717] text-[0.9rem] leading-[1.3rem]"> #{pr.prNumber} </span>
                       {" "}
                        <span
                          className="text-[0.75rem] leading-[1.15rem] inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full 
                             font-monospace bg-[#1f2024] opacity-60 hover:bg-[#8957e5] hover:opacity-100 text-white "
                        >
                          <BiGitMerge />
                          {pr.status}
                        </span>
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <ul className="flex flex-wrap items-center mt-6 text-sm font-[450] cursor-default slate opacity-60 font-monospace">
          {tags.map((t: any, i: any) => {
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
