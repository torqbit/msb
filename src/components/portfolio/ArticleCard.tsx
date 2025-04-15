import { ArticleMetadata } from "@/lib/articles";
import Link from "next/link";
import { FC } from "react";

const ArticleCard: FC<{ articles: ArticleMetadata[] }> = ({ articles }) => {
  return (
    <section id="articles" className="w-full max-w-[900px] mx-auto my-12">
      <p className="text-[20px]  mb-8 text-white">Articles</p>
      <hr className="border-[#2d2d36b4] border w-full mb-8"/>
      <div className="space-y-8">
        {articles.map((post) => (
          <article key={post.slug} className="w-full h-[auto] grid grid-cols-2 gap-6 p-4 bg-[#252535] rounded-lg gap-[15px] pb-6 ">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2 px-3 text-white mt-3">{post.title}</h2>
            </Link>
            <p className="text-sm text-gray-400 mt-0 px-3">{post.description}</p>
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
            <time className="	m-0 text-xs text-gray-400 px-3">
              {post.date}
            </time>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArticleCard;
