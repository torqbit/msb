import { ArticleMetadata } from "@/lib/articles";
import Link from "next/link";
import { FC } from "react";

const ArticleCard: FC<{ articles: ArticleMetadata[] }> = ({ articles }) => {
  return (
    <section id="articles" className="w-[900px] my-[50px] mx-auto max-[431px]:w-full max-[431px]:px-4">
      <p className="text-[20px]  mb-8 text-white">Articles</p>
      <hr className="border-[#2d2d36b4] border w-full mb-8"/>
      <div className="grid grid-cols-2 gap-x-10 gap-y-8 max-[431px]:grid-cols-1">
        {articles.map((post) => (
          <article key={post.slug} className="w-full h-auto  bg-[#252535] rounded-lg flex flex-col justify-between gap-[15px] pb-[15px]">
            <div className="relative h-75% mb-2 rounded-md overflow-hidden">
              <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover"/>
              <div className="absolute bottom-0 left-0 w-full flex justify-between bg-white/50 px-4 py-2 text-xs">
                  <time className="	m-0 text-s text-white">{post.date}</time>
              </div>
            </div>
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-m font-semibold px-3 text-white">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-400 m-0 px-3">{post.description}</p>
            <div className="flex gap-5 px-3">
                {post.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-[5px] text-sm "
                  >
                    {tag}
                  </span>
                ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
