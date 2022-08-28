import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import { selectItems } from "../slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);
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

          <div className="flex flex-col space-y-10 p-5 bg-white rounded-md">
            <h1 className="text-3xl pb-4  border-b">
              {items.length === 0
                ? "your Amazon Basket"
                : "Shopping Basket is Empty"}
            </h1>
          </div>
        </div>

        {/* right */}

        <div></div>
      </main>
    </div>
  );
}

export default checkout;
