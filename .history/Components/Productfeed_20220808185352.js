import React from "react";

function Productfeed({ products }) {
  return (
    <div>
      {products.map((product) => (
        <p>{product.title}</p>
      ))}
    </div>
  );
}

export default Productfeed;
