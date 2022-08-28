import React from "react";
import Product from "./Product";

function Productfeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, image, category }) => (
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

      <img
        className="col-span-full rounded-md"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, image, category }) => (
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

      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, image, category }) => (
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
