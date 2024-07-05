import React from "react";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex flex-row justify-between gap-8 px-20 py-8">
        <div className="bold text-3xl flex justify-center items-center">
          Ionut Bucea
        </div>
        <div className="flex flex-row gap-6 justify-center items-center pr-20">
          <div className=" cursor-pointer">Home</div>
          <div className=" cursor-pointer">Product</div>
          <div className=" cursor-pointer">Pricing</div>
          <div className=" cursor-pointer">Contact</div>
        </div>
        <div className="flex flex-row justify-between gap-8 items-center">
          <div className=" cursor-pointer">Login</div>
          <div className=" cursor-pointer bg-violet-800 w-24 h-12 flex justify-center items-center rounded-sm">
            JOIN US
          </div>
        </div>
      </div>
    </div>
  );
}
