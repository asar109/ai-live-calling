import React from "react";
import MainNavbar from "./navbar";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <div className="relative">
      <MainNavbar />
      <div className="flex flex-col justify-center items-center py-32 text-center text-white">
       <h1 className="text-6xl md:text-8xl font-bold leading-[1] bg-clip-text text-transparent bg-gradient-to-r tracking-wide from-amber-500 to-pink-600">
          Boost
          
          
          <br /> Confidence
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-xl">
          Join us to enhance your skills and take your career to the next level with our expert guidance and resources.
        </p>
        <div className="mt-8">
          <Button
          variant={"outline"}
          >
            Get started
          </Button>
        </div>
      </div>

    </div>
  );
};

export default HeroSection;
