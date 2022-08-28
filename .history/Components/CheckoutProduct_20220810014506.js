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
      <Image src={image} width={200} height={200} />
    </div>
  );
}

export default CheckoutProduct;
