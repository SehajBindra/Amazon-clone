import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import NumberFormat from "react-number-format";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle */}
      <div className=" col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2 md:text-sm">{description}</p>
        <div className="mb-5">
          <NumberFormat value={price} thousandSeparator={true} prefix={"$"} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
