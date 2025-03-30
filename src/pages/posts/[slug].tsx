import { GetStaticProps, GetStaticPaths } from "next";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

interface PostProps {
  post: {
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
    <article className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <time className="text-sm text-gray-500 block mb-8">{post.date}</time>
      <div className="prose prose-lg max-w-none">
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