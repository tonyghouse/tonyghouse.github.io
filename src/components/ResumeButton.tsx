import React from 'react'
import ResumeFile from '../assets/files/Ghouse_Resume.pdf';

function ResumeButton() {
  return (
   <>
   <a href = {ResumeFile} target = "_blank">
       <div className=" font-[440] mr-2 flex flex-col font-monospace 
                       text-[1rem] leading-[2rem] tracking-[0.17rem]
                       md:flex-row md:text-[0.95rem] md:leading-[3rem] hover-accent 
                       slate px-2 border-y-2 backdrop-blur-3xl"
                       >
      Resume/CV 
      </div>
      </a>
   </>
  )
}

export default ResumeButton