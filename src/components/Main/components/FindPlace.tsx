import Image from "next/image";
import map from "@/assets/imgs/map.png";
import { Button } from "@/components/ui/button";
import { IoArrowForward } from "react-icons/io5";

const FindPlace = () => {
  return (
    <div className="flex md:flex-row flex-col mt-20  items-center justify-center">
      <span className="md:block hidden">
        <Image src={map} alt="map" />
      </span>
      <div className="flex flex-col space-y-10">
        <p className="uppercase md:text-lg text-sm tracking-wider">
          experience the groves
        </p>
        <h2 className="text-4xl md:text-7xl">Find your place</h2>
        <p className="text-sm md:text-base">
          Our interactive map will show you the way to the <br /> shops and
          resturants that you want to see.
        </p>
        <Button className="w-1/2 " variant="custom">
          Open the Map <IoArrowForward className="w-10 h-10" />
        </Button>
      </div>
      <span className="md:hidden ">
        <Image src={map} alt="map" />
      </span>
    </div>
  );
};

export default FindPlace;
