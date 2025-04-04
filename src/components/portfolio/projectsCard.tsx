import {FC} from "react";

export type ProjectMetaData ={
    logo:string,
    title:string,
    description:string,
    link:string,
    
}
export const ProjectsCard: FC<{projects : ProjectMetaData[]}>= ({projects}) =>{
    return(
    <section id="projects" className="w-full max-w-[900px] mx-auto my-[50px]">
        <p className="text-[20px]  mb-8 text-white" >Projects</p>
        <hr className="border-[#2d2d36b4] border w-full mb-10" />
        <div className="flex flex-wrap gap-y-6 gap-x-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full sm:basis-[calc(50%-12px)] flex p-3 bg-[#2b2b40] rounded-lg items-center gap-5"
          >
            <ProjectCard
              logo={project.logo}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
    )
}
const ProjectCard: FC<({logo:string,title: string, description:string, link:string})>=({logo,title, description, link})=>(
    <div className="w-[405px] flex p-3 bg-[#2b2b40] rounded-lg items-center gap-5">
        <img className="h-8 w-8 p-2 rounded-full bg-gradient-to-t from-[#ff7e5f] to-[#feb47b]" src={logo} />
        <div className="w-[335px]">
          <div className="flex justify-around items-center gap-[10px]">
            <p className="text-lg m-0 text-white">{title}</p>
            <a href={link} className="	flex items-center bg-[#474768] gap-1 rounded-sm px-3 pb-[3px] h-auto ">
              <p className="m-0 text-xs text-[#bdd4cfde]">{link}</p>
              <i className="text-[#bdd4cfde] h-4">
                <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                  <path d="M8.25 6H18V15.75" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </i>
            </a>
          </div>
          <p className="text-xs text-[#bdd4cfde] mt-2 mb-2">{description}</p>
        </div>
    </div>
)