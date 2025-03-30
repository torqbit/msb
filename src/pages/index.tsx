import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";

import { useSiteConfig } from "@/lib/useSiteConfig";
import { useEffect } from "react";

export default function Home() {
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
    </>
  );
}
