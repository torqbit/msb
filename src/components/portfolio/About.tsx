import { FC } from "react";

export type AboutProps = {
  img: string;
  name: string;
  description: string;
};

export const About: FC<AboutProps> = ({ name, description, img }) => {
  return (
    <section
      id="about"
      className="w-[900px] my-[50px] mx-auto max-[431px]:w-full max-[431px]:px-4"
    >
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-[180px] h-[180px] p-[4px] rounded-full bg-gradient-to-b from-[#949090] to-[#111111] flex items-center justify-center max-[431px]:w-[130px] max-[431px]:h-[130px]">
          <img
            className="absolute w-[170px] h-[170px] rounded-full p-[8px] bg-[#121213] max-[431px]:w-[120px] max-[431px]:h-[120px]"
            src={img}
            alt={name}
          />
        </div>
        <p className="text-[30px] font-bold bg-gradient-text text-transparent bg-clip-text max-[431px]:text-[22px] max-[431px]:text-center max-[431px]:mt-4">
          Hey, I'm {name}
        </p>
        <h1 className="m-0 mb-5 max-w-[800px] text-center text-[50px] font-bold bg-gradient-to-r from-gray-500 via-white to-gray-500 text-transparent bg-clip-text max-[431px]:text-[28px] max-[431px]:max-w-[95%]">
          {description}
        </h1>
      </div>
    </section>
  );
};
