import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results />

      {/*




      Header Componnent
      Nav Bar
      Results component


      */}
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
}
