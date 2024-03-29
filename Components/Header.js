import Image from "next/image";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { selectItems } from "../slices/basketSlice";
import { useDispatch, useSelector } from "react-redux";
function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const items = useSelector(selectItems);
  return (
    <header className="sticky top-0 z-50">
      {/* top nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="flex items-center mt-2 flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/amazon.png"
            width={150}
            height={40}
            objectFit="contain"
            className=" cursor-pointer max-w-fit"
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
          <div onClick={!session ? signIn : signOut} className="link">
            <p> {session ? `Hello ,${session.user.name}` : "Sign In"}</p>
            <p className="font-bold  md:text-sm">Accounts & lists</p>
          </div>
          <div className="link">
            <p className=" hidden font-bold md:text-sm">Returns & Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className=" top-0 right-0 md:right-10 h-4 w-4 absolute rounded-full bg-yellow-400 text-center text-black font-bold">
              {items.length}
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
        <MenuIcon className="h-6 mr-1 cursor-pointer" />
        <p className="link text-xs font-semibold sm:text-base">All</p>
        <p className="link text-xs font-semibold sm:text-base"> Prime Video</p>
        <p className="link text-xs font-semibold sm:text-base">
          {" "}
          Amazon Business
        </p>
        <p className="link text-xs font-semibold sm:text-base">
          {" "}
          Today's Deals
        </p>
        <p className="hidden link md:inline lg:inline text-xs md:text-base">
          Electronics
        </p>
        <p className="link  hidden md:inline  lg:inline text-xs sm:text-base">
          Food & Grocery
        </p>
        <p className="link hidden  lg:inline text-xs sm:text-base">
          Health & Personal care
        </p>
        <p className="link  hidden lg:inline text-xs sm:text-base">Buy Again</p>
        <p className="link  hidden lg:inline text-xs sm:text-base">
          Shopper toolkit
        </p>
      </div>
    </header>
  );
}

export default Header;
