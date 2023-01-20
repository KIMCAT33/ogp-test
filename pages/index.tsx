import type { NextPage } from "next";
import Head from "next/head";
import OpenGraph from "../components/common/OpenGraph";
import { useOpenGraph } from "../hooks/useOpenGraph";
import { absUrl } from "../core/helpers";

const Home: NextPage = () => {
  const ogProperties = useOpenGraph({
    url: absUrl("/"),
    title: "OpenGraph Article", // Add you homepage title
    image: {
      // some default image preview for your website
      type: "image/jpeg",
      url: "/assets/images/ogImage.jpg",
      alt: "Image Alt",
    },
    description: "Your website description",
    type: "website",
  });

  return (
    <div>
      <Head>
        <title>OpenGraph with Next.js</title>
        <meta
          name="description"
          content="Article about OpenGraph with Next.js"
        />

        <OpenGraph properties={ogProperties} />
      </Head>

      <main>
        <h1>OpenGraph with Next.js</h1>
        <div>An empty page is a good page</div>
      </main>
    </div>
  );
};

export default Home;