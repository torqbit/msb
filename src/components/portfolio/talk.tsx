import React from "react";

export type Talk = {
  title: string;
  description: string;
  videoUrl: string;
  date?: string;
  speaker?: string;
};

export const TalkCard: React.FC<{ talks: Talk[] }> = ({ talks }) => {
    return (
      <section id="talks" className="w-full max-w-[900px] mx-auto my-[50px] px-4">
        <p className="text-[20px] mb-8 text-white">Talks</p>
        <hr className="border-[#2d2d36b4] border w-full mb-10" />
  
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-8 w-full max-w-[900px] mx-auto">
          {talks.map((talk, index) => (
            <div
              key={index}
              className="w-full h-auto bg-[#2b2b40] text-white p-4 rounded-xl shadow-md flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-center underline">{talk.title}</h2>
  
                {talk.speaker && (
                  <p className="text-sm mt-1 text-gray-300 text-center">
                    <strong>Speaker:</strong> {talk.speaker}
                  </p>
                )}
  
                {talk.date && (
                  <p className="text-sm text-gray-400 text-center">
                    <strong>Date:</strong> {talk.date}
                  </p>
                )}
  
                <p className="text-sm text-gray-300 mt-2 text-center">
                  {talk.description}
                </p>
              </div>
  
              <div className="w-full mt-4">
                <iframe
                  className="w-full h-24 rounded-md"
                  src={talk.videoUrl}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  