import React, { useState } from "react";

function Experience() {
  const experienceRecord:any = {

    "Software Developer": {
      position: "Software Developer",
      organisation: "Symphony AI",
      url: "https://www.symphonyai.com/",
      duration: "Nov 2023 - Present",
      content: [
        "Played a crucial role in optimizing application workflow and integrating AI features in app",
        "Refactored and improved code with readibility, modularity, extensability and minimal quality issues",
        "Reviewed design and code changes of fellow developers to identify the bugs and quality issues",
        "Designed and implemented higly efficient API endpoints"
      
      ],
    },
    
    "Senior Software Engineer": {
      position: "Senior Software Engineer",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "Jan 2023 - Seps 2023",
      content: [
        "Played a crucial role in designing application workflow by identifying minimal API endpoints required",
        "Designed and implemented primary workflow of application which reduced the development time by 1/2 ",
        "Debugged and fixed performanence issues related to Memory and CPU with reduced resource consumption by 2X",
        "Developed a functionality to handle large file of 20K records with less memory resource and optimal response time  ",
        "Identified and implemented code using a fancy library to execute database queries with less lines of code ",
        // "Reviewed design and code changes of fellow developers to identify the bugs and quality issues",
      ],
    },
    "Software Engineer": {
      position: "Software Engineer",
      organisation: "LTI Mindtree",
      url: "https://www.ltimindtree.com/",
      duration: "March 2021 - Dec 2022",
      content: [
        "Understood the requirements of client and workflow of team very quickly",
        "Implemented crucial functionalities with accurate requirements and minimal bugs",
        "Developed a fast & accurate search functionality with reduction of 4X in response time ",
        "Developed a ETL job with reduction of 10X in execution time and consumption of less CPU and Memory resources ",
        "Written optimal database queries to reduce query exection time by 2X",
        // "Refactored and improved code with readibility, modularity, extensability and minimal quality issues",
      ],
    },
  };
  
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div id="experience" 
           className="flex flex-col items-center w-full text-left section-padding section-margin">
        <div className="flex items-center w-full pb-8 header-line">
          <span className="mr-4 text-xl accent font-monospace">02.</span>
          <span className="text-[22px] whitespace-nowrap slate font-poppins font-[600]">
            Experience
          </span>
        </div>
        <p className="w-full mb-3 leading-7 slate font-inter ">
          As of 2023, I have 3 years of professional developer experience in building backend applications.
           Along side worked and contributed to prominent open-source projects.
        </p>
      
        <div className="flex flex-col w-full mt-10 md:flex-row flex-start md:gap-20">
          <ul className="flex mb-8 mr-6 overflow-x-scroll text-sm md:flex-col slate-alt font-monospace work-list md:mb-0">
            {Object.keys(experienceRecord).map((k, i) => {
              return (
                <li
                   key={k}
                  onClick={() => setActiveTab(i)}
                  className={`p-3 px-6 cursor-pointer border-b-2 md:border-b-0 md:border-l-2 ${
                    activeTab === i ? "active-item" : ""
                  }`}
                >
                  {k}
                </li>
              );
            })}
          </ul>
          <div className="p-2 ">
            {Object.keys(experienceRecord).map((k, i) => {
              return (
                <div key={k} className={`${activeTab === i ? "" : "hidden"}`}>
                  <div className={`font-poppins text-xl mb-1 font-[500]`}>
                    <span className="mr-2 slate">{experienceRecord[k].position}</span>
                    <a href={experienceRecord[k].url} className={"accent"} target="_blank" rel="noreferrer" >
                      @ {experienceRecord[k].organisation}
                    </a>
                  </div>
                  <span className={"slate text-sm font-monospace"}>
                    {experienceRecord[k].duration}
                  </span>
                  <ul className="flex flex-col mt-4 text-sm leading-6 bullet-list slate-alt font-inter">
                    {Object.values(experienceRecord[k].content).map((v:any) => (
                      <li key={v} className={"mb-2"}>{v}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Experience;
