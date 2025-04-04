import { ArticleMetadata, getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/portfolio/ArticleCard";
import { GetStaticProps } from "next";
import { useSiteConfig } from "@/lib/useSiteConfig";
import { Nav } from "@/components/portfolio/Nav";
import { Contact } from "@/components/portfolio/Nav";
import { About } from "@/components/portfolio/About";
import { ProjectsCard } from "@/components/portfolio/projectsCard";
import { ProjectMetaData } from "@/components/portfolio/projectsCard";
import { TalkCard } from "@/components/portfolio/talk";
import Footer from "@/components/portfolio/footer";

interface HomeProps {
  articles: ArticleMetadata[];
  projects: ProjectMetaData[];
}

export default function Home({ articles , projects}: HomeProps) {
  const { nav, about, talks, footer} = useSiteConfig();

  const typedContact = nav.contact as Contact


  return (
    <div className="min-h-screen bg-black border">
      <Nav firstName={nav.firstName} lastName={nav.lastName} links={nav.links} contact={typedContact}/>
      <About name={about.name} description={about.description} img={about.img}/>
      <ArticleCard articles={articles} />
      <ProjectsCard projects={projects}/>
      <TalkCard talks={talks}/>
      <Footer  year={footer.year} name={footer.name}/>
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const articles = getAllArticles();
  const projectResponse= await  fetch("https://api.github.com/users/aisha-agarwal00/repos",{
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  })
  const projectJson = await projectResponse.json()
  const projects: ProjectMetaData[]= projectJson.map((res: any)=>{
    return {
      title: res.name,
      description: res.description,
      link: res.html_url
    }
  });

  //console.log(projectDisplay)
  return {
    props: {
      articles,
      projects
    },
  };
};
