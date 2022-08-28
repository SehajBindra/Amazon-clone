import { StarIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const MAX_RATING = 8;
const MIN_RATING = 3;

function Product({ id, title, price, description, image, category }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MINRATING + 1)) + MIN_RATING
  );

  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <div>
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5" />
          ))}
      </div>

      <h4>{title}</h4>
    </div>
  );
}

export default Product;
