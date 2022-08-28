import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import NumberFormat from "react-number-format";
import { useDispatch } from "react-redux";
import { addtoBasket, removefromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
  hasprime,
}) {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      rating,
      hasprime,
      category,
    };
    //  sending the product as an action to redux store.. the basket slice
    dispatch(addtoBasket(product));
  };
  const RemoveItemFromBasket = () => {
    // removing the item from Redux
    dispatch(removefromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} width={200} height={200} objectFit="contain" />

      {/* Middle */}
      <div className=" col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-2 md:text-sm">{description}</p>
        <div className="mb-5">
          <NumberFormat value={price} thousandSeparator={true} prefix={"$"} />
        </div>

        {hasprime && (
          <div className="flex space-x-2 items-center">
            <img
              loading="lazy"
              className="w-12  "
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs">Free Next Day Delivery</p>
          </div>
        )}
      </div>

      {/* Right add/remove button */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={RemoveItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
