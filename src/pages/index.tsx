import { Button } from "@/components/ui/button";
import { ArticleMetadata, getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/portfolio/ArticleCard";
import { GetStaticProps } from "next";
import { useSiteConfig } from "@/lib/useSiteConfig";
import { useEffect } from "react";

interface HomeProps {
  articles: ArticleMetadata[];
}

export default function Home({ articles }: HomeProps) {
  const { name } = useSiteConfig();

  useEffect(() => {
    fetch("https://api.github.com/users/amezng/repos", {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <Button>Hello {name}</Button>
      <h1 className="m-auto w-24">Hello {name}</h1>
      <ArticleCard articles={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = getAllArticles();
  console.log(articles);
  return {
    props: {
      articles,
    },
  };
};
