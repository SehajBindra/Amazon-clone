import Image from "next/image";
import React from "react";

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
      </div>
      {/* bottom Nav */}
      <div></div>
    </header>
  );
}

export default Header;
