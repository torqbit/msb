import React from "react";

type FooterProps = {
    year:number;
    name: string;
  };

  const Footer: React.FC<FooterProps> = ({year, name}) => {
  return (
    <footer className="w-[900px] mx-auto mt-[70px] max-[430px]:w-[100vw]">
      <hr className="m-0 border border-[#2d2d36b4] max-[430px]:w-[90vw] max-[430px]:mx-auto max-[430px]:my-2" />
      <div className="flex flex-row justify-between text-[#bdd4cfde] text-[15px] max-[430px]:justify-center max-[430px]:pb-[60px] max-[430px]:text-[17px] mt-[10px] mb-[10px]">
        <p>Copyright {year} {name}</p>
        <div className="flex gap-[30px] max-[430px]:hidden">
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Articles</p>
          <p className="cursor-pointer">Projects</p>
          <p className="cursor-pointer">Talks</p>
        </div>
      </div>
      <div className="hidden fixed bottom-0 w-screen justify-evenly items-center p-2 bg-[#2b2b40] max-[430px]:flex">
        {["About", "Articles", "Projects", "Talks"].map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <i>
              <svg
                className="w-[22px] h-[22px] text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </i>
            <p className="text-[12px] text-[#C0C2D6] m-0">{item}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
