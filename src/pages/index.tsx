import { Button } from "@/components/ui/button";
import { ArticleMetadata, getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/portfolio/ArticleCard";
import { GetStaticProps } from "next";
import { useSiteConfig } from "@/lib/useSiteConfig";
import { useEffect } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { About } from "@/components/portfolio/About";

interface HomeProps {
  articles: ArticleMetadata[];
}

export default function Home({ articles }: HomeProps) {
  const { nav, about } = useSiteConfig();

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
      <Nav firstName={nav.firstName} lastName={nav.lastName} links={nav.links} contact={nav.contact}/>
      <About name={about.name} description={about.description} img={about.img}/>
      {/* <ArticleCard articles={articles} /> */}
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
