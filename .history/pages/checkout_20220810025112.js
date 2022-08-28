import { interpolateAs } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import React from "react";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import CheckoutProduct from "../Components/CheckoutProduct";
import Header from "../Components/Header";
import { selectItems } from "../slices/basketSlice";
import { useSession } from "next-auth/react";

function checkout() {
  const items = useSelector(selectItems);
  const { data: session, status } = useSession();
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
                ? "Your Amazon Basket is Empty"
                : "Shopping Basket "}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                price={item.price}
                category={item.category}
                image={item.image}
                description={item.description}
                title={item.title}
                rating={item.rating}
                hasprime={item.hasprime}
              />
            ))}
          </div>
        </div>

        {/* right */}

        <div>
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-semibold">
                  {/* <NumberFormat value={price} thousandSeparator={true} prefix={"$"} /> */}
                </span>
              </h2>
              <button
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed To Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
