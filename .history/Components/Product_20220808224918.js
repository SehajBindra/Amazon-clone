import Image from "next/image";
import React from "react";

function Product({ id, title, price, description, image, category }) {
  return (
    <div>
      <p>{category}</p>

      <Image src={image} height={200} width={200} />
    </div>
  );
}

export default Product;
