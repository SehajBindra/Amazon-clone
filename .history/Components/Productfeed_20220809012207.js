import { StarIcon } from "@heroicons/react/outline";
import React from "react";
import Product from "./Product";

function Productfeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, image, category }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          image={image}
          Icon={StarIcon}
          category={category}
        />
      ))}
    </div>
  );
}

export default Productfeed;
