import { CheckCircleIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Header from "../Components/Header";

function success() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Amazon / Success</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
        />
      </Head>
      <div className="bg-gray-100 h-screen">
        <Header />

        <main className="max-w-screen-lg mx-auto">
          <div className="flex flex-col p-10 bg-white rounded-md">
            <div className="flex items-center space-x-2 mb-5">
              <CheckCircleIcon className="text-green-500 h-10" />
              <h1 className="text-2xl md:text-3xl">
                Thank you Your Order has been Confirmed
              </h1>
            </div>
            <p>
              thank you for shopping with us we w'll send you a confirmation
              message of item has shipped.
            </p>
            <button onClick={() => router.push("/")} className="button mt-8">
              Back to Home Page
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default success;
