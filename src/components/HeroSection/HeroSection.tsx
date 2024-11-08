import React from "react";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

const HeroSection = () => {
  return (
    <>
      <div className="px-12 relative bg-hero bg-cover h-screen sm:h-[calc(100vh-5rem)] bg-center w-full">
        <div className="w-full bg-black/55 md:w-1/2 h-full flex flex-col justify-center">
          <p className="tracking-widest mb-10">KHAWAJA YANNI</p>
          <h2 className="text-5xl md:text-8xl">The new</h2>
          <h2 className="text-5xl md:text-8xl">era of luxury</h2>

          <p className="text-sm md:text-lg mt-10 w-2/3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum{" "}
          </p>

          <Button
            className="mt-10 md:w-1/2 flex justify-between md:text-md "
            size="lg"
            variant="custom"
          >
            Book Reservation Now <IoArrowForward className="size-5" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
