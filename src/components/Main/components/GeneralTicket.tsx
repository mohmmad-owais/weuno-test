import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

import Pic01 from "@/assets/imgs/pic01.png";
import Pic02 from "@/assets/imgs/pic02.png";
import Pic03 from "@/assets/imgs/pic03.png";
import Pic04 from "@/assets/imgs/pic04.png";

const GeneralTicket = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl md:text-7xl">Book General Access ticket and</h2>
      <h2 className="text-5xl md:text-7xl">enjoy the attractions for free</h2>

      <Button className="mt-10 " size="lg" variant="custom">
        Book General Access Ticket <IoArrowForward className="ml-2" />
      </Button>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-10 gap-6 p-4 ">
        <div className="rounded-lg overflow-hidden col-span-3 ">
          <Image src={Pic01} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Little Krazy
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-span-2 mt-20">
          <Image src={Pic02} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Hawanin <br /> Groves City
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-span-3">
          <Image src={Pic03} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Picnic Market
          </h2>
        </div>
        <div className="rounded-lg overflow-hidden col-span-2 mt-10">
          <Image src={Pic04} alt="alt" className="w-full h-auto object-cover" />
          <h2 className="text-center text-lg md:text-2xl text-white mt-4">
            Lucaworld
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GeneralTicket;
