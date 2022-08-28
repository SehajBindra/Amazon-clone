import React from "react";
import Product from "./Product";

function Productfeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
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
