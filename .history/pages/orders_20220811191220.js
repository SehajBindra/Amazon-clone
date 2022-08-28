import React from "react";
import Header from "../Components/Header";
import { useSession } from "next-auth/react";

function Orders() {
  const { data: session, status } = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Order
        </h1>
      </main>
    </div>
  );
}

export default Orders;
