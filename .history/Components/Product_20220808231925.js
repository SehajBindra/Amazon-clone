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

  const [hasprime] = useState(Math.random() < 0.5);

  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>

      <p>{description}</p>

      <div>
        <NumberFormat value={price} thousandSeparator={false} prefix={"₹"} />;
      </div>
    </div>
  );
}

export default Product;
