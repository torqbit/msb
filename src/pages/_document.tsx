import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en"  className="h-full">
      <Head/>
      <body className="h-full m-0 p-0  font-sans bg-[white] ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
