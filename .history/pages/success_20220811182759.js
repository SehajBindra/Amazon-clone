import { CheckCircleIcon } from "@heroicons/react/outline";
import React from "react";
import Header from "../Components/Header";

function success() {
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      success
      <main className="max-w-screen-lg mx-auto">
        <div>
          <CheckCircleIcon className="text-green-500 h-10" />
        </div>
      </main>
    </div>
  );
}

export default success;
