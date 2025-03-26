import Image from "next/image";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";

import { useSiteConfig } from "@/lib/useSiteConfig";

export default function Home() {
  const { name } = useSiteConfig();

  return (
    <>
      <Button>Hello {name}</Button>
    </>
  );
}
