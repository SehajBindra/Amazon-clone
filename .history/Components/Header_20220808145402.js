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
        <div className="text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap cursor-pointer font-semibold">
          <div className="link">
            <p>Hello Sehaj Bindra !</p>
            <p className="font-bold  md:text-sm">Accounts & lists</p>
          </div>
          <div className="link">
            <p className="font-bold md:text-sm">Returns & Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className=" top-0 right-0 md:right-10 h-4 w-4 absolute rounded-full bg-yellow-400 text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className=" hidden md:inline font-bold md:text-sm mt-1">
              {" "}
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom Nav */}
      <div className="flex items-center bg-amazon_light_blue text-white space-x-3 pl-6 p-2">
        <MenuIcon className="h-6 mr-1" />
        <p>all</p>
        <p> Prime Video</p>
      </div>
    </header>
  );
}

export default Header;
