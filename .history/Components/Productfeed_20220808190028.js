import React from "react";
import Product from "./Product";

function Productfeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, image, category }) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          image={image}
          category={category}
        />
      ))}
    </div>
  );
}

export default Productfeed;
