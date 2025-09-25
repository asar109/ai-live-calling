"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const MainNavbar = () => {
  const router = useRouter();

  return (
    <header className="bg-gradient-to-r from-amber-500 to-pink-500 max-w-7xl mx-auto py-4 px-8 rounded-xl mt-4 flex justify-between items-center">
      <h1
        onClick={() => {
          router.push("/");
        }}
        className="text-2xl text-white font-bold hover:cursor-pointer"
      >
        Booster
      </h1>
      <ul className="flex justify-between items-center gap-x-6 list-none">
        <Link
          href={"/dashboard"}
          className="text-md font-bold hover:cursor-pointer  px-4 py-2 text-pink-500  rounded-xl bg-white transition-all"
        >
          Dashboard
        </Link>
        <Link 
         href={"/pricing"}
        className="text-md font-bold text-white hover:cursor-pointer hover:text-gray-100 transition-all">
          Pricing
        </Link>
        <Link 
         href={"/about-us"}
        className="text-md font-bold text-white hover:cursor-pointer hover:text-gray-100 transition-all">
          About us
        </Link>
        <Link 
         href={"/contact"}
        className="text-md font-bold text-white hover:cursor-pointer hover:text-gray-100 transition-all">
          Contact
        </Link>
      </ul>
    </header>
  );
};

export default MainNavbar;
