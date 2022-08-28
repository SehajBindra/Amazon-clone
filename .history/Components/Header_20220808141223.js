import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className=" cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className=" hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer   bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center text-sm space-x-6 px-2 mx-6 whitespace-nowrap cursor-pointer font-semibold">
          <div>
            <p>Hello Sehaj Bindra !</p>
            <p>Accounts & lists</p>
          </div>
          <div>
            <p>Returns & Orders</p>
          </div>
          <div>
            <ShoppingCartIcon className="h-10" />
            <p> Basket</p>
          </div>
        </div>
      </div>
      {/* bottom Nav */}
      <div></div>
    </header>
  );
}

export default Header;
