import { CheckCircleIcon } from "@heroicons/react/solid";
import React from "react";
import Header from "../Components/Header";

function success() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      success
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white rounded-md">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank you Your Order has been Confirmed
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}

export default success;
