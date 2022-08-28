import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, image, category }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasprime] = useState(Math.random() < 0.5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const products = {
      id,
      title,
      price,
      description,
      image,
      category,
    };
    //  sending the product as an action to redux store.. the basket slice
    dispatch(addItemToBasket(products));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md">
      <p className="absolute top-2 right-2 text-xs  text-gray-400">
        {category}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{title}</h4>

      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div> */}

      <p className="text-xs my-2 line-clamp-3">{description}</p>

      <div className="mb-5">
        <NumberFormat value={price} thousandSeparator={true} prefix={"$"} />
      </div>

      <div className="flex space-x-2 items-center mt-5">
        <img
          className="w-12 h-12 "
          src="https://links.papareact.com/fdw"
          alt=""
        />
        <p className="text-xs">Free Next Day Delivery</p>
      </div>

      <button onClick={addItemToBasket} className="button">
        Add to basket
      </button>
    </div>
  );
}

export default Product;
