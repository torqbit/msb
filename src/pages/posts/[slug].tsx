import { GetStaticProps, GetStaticPaths } from "next";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface PostProps {
  post: {
    thumbnail:string;
    slug: string;
    title: string;
    date: string;
    description: string;
    tags: string[];
    content: any; // MDX content
  };
}

export default function Post({ post }: PostProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-10 bg-[#FAF3E0] shadow-xl rounded-2xl flex flex-col items-center space-y-6">
  <img
    src={post.thumbnail}
    alt={post.title}
    className="w-full rounded-lg shadow-md object-cover max-h-[400px]"
  />
  <h1 className="text-4xl font-extrabold text-gray-800 text-center leading-tight">
    {post.title}
  </h1>
  <div className="flex flex-wrap gap-2 justify-center">
    {post.tags.map((tag) => (
      <span
        key={tag}
        className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm shadow-sm hover:bg-gray-100 transition"
      >
        #{tag}
      </span>
    ))}
  </div>
  <time className="text-sm text-gray-500">{post.date}</time>
  <div className="prose prose-lg prose-slate max-w-none w-full">
    <MDXRemote {...post.content} />
  </div>
</article>

  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllArticles();
  
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const post = getArticleBySlug(slug);
  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource,
      },
    },
  };
};