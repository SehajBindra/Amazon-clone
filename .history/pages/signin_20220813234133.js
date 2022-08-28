import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Head from "next/head";

function SignIn({ providers }) {
  return (
    <>
      <Head>
        <title>Login · Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
        />
      </Head>

      <div className=" flex flex-col justify-center items-center min-h-screen py-2  px-14 text-center">
        <img
          className="w-80"
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
        />

        <p className="font-xs italic">
          This is not a Real App it is Built for Education Purposes only
        </p>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <div key={provider.name}>
                <button
                  className=" p-3 button rounded-md font-semibold text-sm"
                  onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                >
                  Sign In with {provider.name}
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default SignIn;
