import { ArticleMetadata } from "@/lib/articles";
import Link from "next/link";
import { FC } from "react";

const ArticleCard: FC<{ articles: ArticleMetadata[] }> = ({ articles }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Articles</h1>
      <div className="space-y-8">
        {articles.map((post) => (
          <article key={post.slug} className="border rounded-lg p-6">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-2">{post.description}</p>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <time className="text-sm text-gray-500 mt-2 block">
              {post.date}
            </time>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleCard;
