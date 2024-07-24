import type { NextPage } from "next";
import Head from "next/head";
import { GalleryView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>NFTs Yo</title>
        <meta name="description" content="we finna make it" />
      </Head>
      <GalleryView />
    </div>
  );
};

export default Home;
