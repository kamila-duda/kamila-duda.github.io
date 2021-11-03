import Head from "next/head";
import { useRouter } from "next/router";

export const Seo = () => {
  const router = useRouter();
  const url = router.asPath;
  return (
    <Head>
      <title>Kamila Duda</title>
      <meta name="description" content="My portfolio page" />
      <meta name="keywords" content="React, project, frontend" />
      <meta charSet="utf-8" />
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:title" content="my page" key="og:title" />
      <meta property="og:description" content="my page" key="og:description" />
      <link rel="canonical" href={url} />
      <link rel="icon" href="@public/favicon.png" type="image/x-icon" />
    </Head>
  );
};
