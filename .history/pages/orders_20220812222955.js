import React from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";

import { db } from "../firebase";

function Orders({ orders }) {
  const { data: session, status } = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Order
        </h1>
        {session ? <h2> x Orders</h2> : <h2>Sign In to Continue</h2>}

        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
}

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.STRIPE_SECRET_KEY);
  //    GET THE USER LOGIN CREDENTIALS....

  const session = unstable_getServerSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await db.collection("users").doc;
}
