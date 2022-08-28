import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import NumberFormat from "react-number-format";

const MAX_RATING = 8;
const MIN_RATING = 2;

function Product({ id, title, price, description, image, category }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasprime] = useState(
    typeof window === "undefined" && Math.random() < 0.5
  );

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs  text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p>{description}</p>

      <div>
        <NumberFormat value={price} thousandSeparator={true} prefix={"$"} />;
      </div>

      {hasprime && (
        <div>
          <img src="https://links.papareact.com/fdw" alt="" />
          <p>Free Next Day Delivery</p>
        </div>
      )}

      <button>Add to basket</button>
    </div>
  );
}

export default Product;
