import React from "react";

function Productfeed({ products }) {
  return (
    <div>
      {products.map(({ id, title, price, description, image, category }) => (
        <p>{title}</p>
      ))}
    </div>
  );
}

export default Productfeed;
