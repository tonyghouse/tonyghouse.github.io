import React , {useContext} from "react";

import MemoiristDarkBanner from "../assets/images/projects/memoirist-banner-dark.png";
import MemoiristLightBanner from "../assets/images/projects/memoirist-banner-light.png";
import SocialRavenDarkBanner from "../assets/images/projects/socialraven-banner-dark.png";
import SocialRavenLightBanner from "../assets/images/projects/socialraven-banner-light.png";
import ViscodyDarkBanner from "../assets/images/projects/viscody-banner-dark.png";
import ViscodyLightBanner from "../assets/images/projects/viscody-banner-light.png";
import FeaturedProject from "./FeaturedProject";
import Project from "./Project";
import {FaExternalLinkAlt,FaGithub} from "react-icons/fa";


function Projects() {

  const featuredProjectList = [
    {
      name: "Social Raven - Social media management tool",
      description:
        "Social media management tool that helps in scheduling posts, analyse traffic for social media accounts",
      tags: ["SpringBoot", "ReactJs / NextJs", "Postgres", "Kafka", "Redis"],
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/socialraven-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://socialraven.tonyghouse.com"
      }],
      imageLight: SocialRavenLightBanner,
      imageDark: SocialRavenDarkBanner,
    },
    {
      name: "ConvoMail - Streamline Your Inbox, Amplify Your Chat",
      description:
        "ConvoMail transforms your email experience by blending the efficiency of chat with the professionalism of traditional emailing.",
      tags: ["SpringBoot", "ReactJs / NextJs", "Postgres", "MeiliSearch", "Redis"],

      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/convomail-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://convomail.tonyghouse.com"
      }],
      imageLight: MemoiristLightBanner,
      imageDark: MemoiristDarkBanner,
    },
    {
      name: "Supetools - tools to supercharge your productivity",
      description:
        "Supetools - app that helps in visualizing Json, Yaml, Xml, Csv etc",
      tags: ["ReactJs / NextJs", "Tailwind", "ReactFlow", "Monaco Code Editor"],
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/supetools-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://supetools.tonyghouse.com"
      }],
      imageLight: ViscodyLightBanner,
      imageDark: ViscodyDarkBanner,
    },
  ];

  const otherProjectList = [
    {
      title: "MailMaker - Craft mails that look awesome",
      description: "Craft mails with awesome UI",
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/mailmaker-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://mailmaker.tonyghouse.com"
      }],
      tags: ["ReactJs / NextJs"],
    },
    {
      title: "DBCrafter - Db Utility tools",
      description: "Util tools for your db",
      links: [ {
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/dbcrafter-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://dbcrafter.tonyghouse.com"
      }],
      tags: ["Javascript", "ReactJs / NextJs"],
    },
    {
      title: "Tern - Monitoring tool",
      description: "Monitoring tool to observe apps in environments",
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/tern-monitoring-tool-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://tern.tonyghouse.com"
      }],
      tags: ["Java", "Spring", "Postgres", "Kafka", "ReactJs / NextJs"],
    },
  
    {
      title: "RollbackRanger - Roolback the data modified by API",
      description: "Tool to rollback the data modified by API",
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/rollbackranger-ui"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://rollbackranger.tonyghouse.com"
      }],
      tags: ["Java", "Spring", "Postgres", "Kafka", "ReactJs / NextJs"],
    },
    {
      title: "NoteKnack - browser extension to save notes for different sites",
      description: "Browser extension to save notes for different sites",
      links:[{
        "icon":<FaGithub/>,
        "url":"https://github.com/tonyghouse/noteknack-extension"
      },
      {
        "icon":<FaExternalLinkAlt/>,
        "url":"https://noteknack.tonyghouse.com"
      }],
      tags: ["Javascript"],
    },
  ];

  return (
    <>
      <div
        id="projects"
        className="flex flex-col items-center w-full section-padding section-margin "
      >
        <div className="flex items-center w-full pb-10 header-line ">
          <span className="mr-4 text-xl accent font-monospace">03.</span>
          <h3 className="slate whitespace-nowrap text-2xl font-[600] font-poppins">
            Featured Projects
          </h3>
        </div>
        {featuredProjectList.map((p, i) => {
          return (
            <FeaturedProject
              key={p.name}
              imageLight={p.imageLight}
              imageDark={p.imageDark}
              title={p.name}
              description={p.description}
              tags={p.tags}
              links={p.links}
              orientation={!(i % 2)}
            />
          );
        })}

        <div className="flex flex-col items-center w-full ">
          <div className="flex flex-col items-center justify-center w-full pb-4">
            <h3 className="slate mb-[0.3rem] text-2xl font-[600] font-poppins">
              Other Projects
            </h3>
            <a
              href="https://github.com/tonyghouse?tab=repositories"
              className={"accent font-monospace text-sm"}
            >
              view github repos
            </a>
          </div>
          
          <div className="grid w-full gap-4 md:grid-cols-3 ">
            {otherProjectList.map((p) => {
              return (
                <Project
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
      </div>
    </>
  );
}

export default Projects;
