import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";


const extractVideoId = (youtubeUrl: string) => {
  let videoId = "";

  if (youtubeUrl.includes("youtube.com/watch?v=")) {
    videoId = youtubeUrl.split("v=")[1];
  } else if (youtubeUrl.includes("youtu.be/")) {
    videoId = youtubeUrl.split("youtu.be/")[1];
  }

  return (
    videoId? `https://www.youtube.com/embed/${videoId}`: ""
  );
};

const extractThumbnail = (youtubeUrl: string) => {
  let videoId = "";

  if (youtubeUrl.includes("youtube.com/watch?v=")) {
    videoId = youtubeUrl.split("v=")[1];
  } else if (youtubeUrl.includes("youtu.be/")) {
    videoId = youtubeUrl.split("youtu.be/")[1];
  }

  return (
    videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : ""
  );
};


export type Talk = {
  videoUrl: string;
};

export const TalkCard: React.FC<{ talks: Talk[] }> = ({ talks }) => {
  
  return (
    <section
      id="talks"
      className="w-[900px] my-[50px] mx-auto max-[431px]:w-full max-[431px]:px-4"
    >
      <p className="text-[20px] mb-8 text-white">Talks</p>
      <hr className="border-[#2d2d36b4] border w-full mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[900px] mx-auto">
        {talks.map((talk, index) => (
          <HeroVideoDialog
            key={index}
            className="block dark:hidden"
            animationStyle="from-center"
            videoSrc={extractVideoId(talk.videoUrl)}
            thumbnailSrc={extractThumbnail(talk.videoUrl)}
            thumbnailAlt="Dummy Video Thumbnail"
          />
        ))}
      </div>
    </section>
  );
};
