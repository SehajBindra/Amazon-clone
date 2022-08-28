import Image from "next/image";
import React from "react";

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
      </div>
    </div>
  );
}

export default CheckoutProduct;
