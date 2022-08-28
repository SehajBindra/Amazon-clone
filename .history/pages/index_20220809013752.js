import Head from "next/head";
import Image from "next/image";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import Productfeed from "../Components/Productfeed";
import styles from "../styles/Home.module.css";

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-xl mx-auto">
        {/* banner */}
        <Banner />

        {/* Product feed */}
        <Productfeed products={products} />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}

// Get >>>>>> "https://fakestoreapi.com/products" so basically in this server calculates and then provide the information back to user.