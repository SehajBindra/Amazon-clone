import Image from "next/image";
import React from "react";
import Header from "../Components/Header";

function checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
          />

          <div>
            <h1>Your Shopping Basket</h1>
          </div>
        </div>

        {/* right */}

        <div></div>
      </main>
    </div>
  );
}

export default checkout;
