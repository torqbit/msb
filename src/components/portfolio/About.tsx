import styles from '@/styles/portfolioEditor/About.module.css'      
import {FC} from "react";

export type AboutProps = {
  img: string ;
  name: string ;
  description: string;
}


export const About: FC<AboutProps> = ({name, description, img}) =>{
  return(
    <section id="About" className="w-[900px] my-[50px] mx-auto" >
    <div className="flex flex-col justify-center items-center">
        <div className="relative w-[170px] h-[170px] p-1 rounded-full bg-gradient-to-b from-[#949090] to-[#111111]">
            <img className="absolute w-[150px] h-[150px] rounded-full p-2 bg-[#121213]" src={img} />
        </div>
      <p className="text-[30px] font-bold bg-gradient-text">Hey,I'm {name}</p>
      <h1 className="m-0 mb-5 max-w-[800px] text-center text-[45px] gradient-text">
        {description}
      </h1>
    </div>
    </section>
  )
}

