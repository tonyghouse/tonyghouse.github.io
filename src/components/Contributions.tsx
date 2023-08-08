import React from "react";
import SourceRepo from "./SourceRepo";
import {FaRegFolder,FaGithub} from "react-icons/fa";


function Contributions() {
    const contributedRepoList = [
        {
    
          title: "Meilisearch Java",
          description: "Java client for meilisearch search engine(open source alternative to elastic search)",
          links: [
            
            {
              "icon":<FaGithub/>,
              "url":"https://github.com/meilisearch/meilisearch-java"
            }
          ],
          tags: ["Meilisearch:34536 stars ",
           "Meilisearch-java:104 stars"],
        },
        // {
        //   title: "Ryze project",
        //   description: "Ryze private project",
        //   links: [
        //     {
        //       "icon":<FaGithub/>,
        //       "url":"https://github.com/ghousek1/ryze"
        //     }],
        //   tags: ["Ryze project:(unknown) stars"],
        // }
      ];
    
  return (
    <>
    <div id="contributions" className="flex flex-col items-center w-full section-padding section-margin">
      <div className="flex items-center w-full pb-10 header-line">
        <span className="mr-4 text-xl accent font-monospace">04.</span>
        <h3 className="text-2xl whitespace-nowrap slate font-[600] font-Poppins">
          Open-source <span className="block md:inline">contributions</span>
        </h3>
      </div>
      <div className="grid w-full gap-4 md:grid-cols-1">//TODO
    
    {contributedRepoList.map((p, i) => {
      return (
        <SourceRepo
           key={p.title}
          title={p.title}
          description={p.description}
          tags={p.tags}
          links={p.links}
        />
      );
    })}
     
    </div>
    </div>

  </>
  )
}

export default Contributions