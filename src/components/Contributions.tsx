import React from "react";
import SourceRepo from "./SourceRepo";
import {FaRegFolder,FaGithub} from "react-icons/fa";


function Contributions() {
    const contributedRepoList = [
        {
    
          title: "Meilisearch Java",
          description: "Java client SDK for meilisearch search engine(open source alternative to elastic search)",
          links: [
            
            {
              "icon":<FaGithub/>,
              "url":"https://github.com/meilisearch/meilisearch-java"
            }
          ],
         prList:[
            
           {
             title:"Correction of naming methods related to Ranking Rules",
             issueNumber:"525",
             prNumber:"539",
             prLink:"https://github.com/meilisearch/meilisearch-java/pull/539",
             status:"Merged"
           },
            {
              title:"Replaced traditional getter setter with lombok getter setter",
              issueNumber:"379",
              prNumber:"385",
              prLink:"https://github.com/meilisearch/meilisearch-java/pull/385",
              status:"Merged"
            },
            {
              title:"Added total tasks in task route ",
              issueNumber:"636",
              prNumber:"637",
              prLink:"https://github.com/meilisearch/meilisearch-java/pull/637",
              status:"Merged"
            },
          ],

          tags: [
            "Meilisearch: 38200 Stars",
           "Meilisearch-java: 104 Stars"],
        },
        {
          title: "Meilisearch Go",
          description: "Go client SDK for meilisearch search engine(open source alternative to elastic search)",
          links: [
            {
              "icon":<FaGithub/>,
              "url":"https://github.com/meilisearch/meilisearch-go"
            }],

            prList:[
              {
                title:"Added total tasks in task route ",
                issueNumber:"636",
                prNumber:"471",
                prLink:"https://github.com/meilisearch/meilisearch-go/issues/471",
                status:"Merged"
              }
            ],
  
            tags: [
            "Meilisearch: 38200 Stars",
            "Meilisearch-go: 373 Stars"
          ],
        }
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
      <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-2">
    
    {contributedRepoList.map((p, i) => {
      return (
        <SourceRepo
           key={p.title}
          title={p.title}
          description={p.description}
          tags={p.tags}
          prList={p.prList}
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