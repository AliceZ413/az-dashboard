import { Html, Head, Main, NextScript } from "next/document";
export const siteTitle = "Next.js Sample Website";
const Document = () => {
  return (
    <Html lang="en" className="bg-white text-slate-900 antialiased">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
