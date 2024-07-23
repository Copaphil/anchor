import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Finna learn today</title>
        <meta
          name="Dawgs learnin place"
          content="Yezzzir boys"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
