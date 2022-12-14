import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-screen-2xl mx-auto">
        {/* banner */}
        <Banner />

        {/* Product feed */}
      </main>

      <Header />
    </div>
  );
}
