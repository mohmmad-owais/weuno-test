import React, { use, useEffect, useState } from "react";

import closeIcon from "@/assets/imgs/cross.png";
import hamburger from "@/assets/imgs/hamburger.png";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import eng from "@/assets/imgs/eng.png";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  setChangeBg: (value: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ setChangeBg }) => {
  const [click, setClick] = useState(false);
  const closeMenu = () => {
    setClick(false);
    setChangeBg(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {click && (
        <>
          <nav className="md:hidden">
            <div className="absolute top-[15vh] right-0 z-10 w-full h-full bg-main  border-t-[1px] border-white/50 ">
              <ul className="text-sm space-y-10 flex flex-col uppercase tracking-widest ">
                <li
                  className="border-b-[1px] border-white/50 pb-3 mt-10"
                  onClick={closeMenu}
                >
                  <Link href="">
                    <p className="px-12">Dine with us</p>
                  </Link>
                </li>
                <li
                  className="border-b-[1px] pb-3 border-white/50"
                  onClick={closeMenu}
                >
                  <Link href="">
                    <p className="px-12">Plan your visit</p>
                  </Link>
                </li>
                <li className="border-b-[1px] pb-3 border-white/50">
                  <Link href="">
                    <p className="px-12">Events</p>
                  </Link>
                </li>
                <li
                  className="border-b-[1px] pb-3 border-white/50"
                  onClick={closeMenu}
                >
                  <Link href="">
                    <p className="px-12">View Groves map</p>
                  </Link>
                </li>
                <li
                  className="border-b-[1px] pb-3 border-white/50"
                  onClick={closeMenu}
                >
                  <Link href="">
                    <p className="px-12">Our story</p>
                  </Link>
                </li>
                <li
                  className="border-b-[1px] pb-3 border-white/50"
                  onClick={closeMenu}
                >
                  <Link href="">
                    <p className="px-12">Contact US</p>
                  </Link>
                </li>
              </ul>

              <div className="mt-8 px-12">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <div className="flex items-center">
                      {!isOpen ? (
                        <span className="mr-2">
                          <MdKeyboardArrowDown
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300"
                          />
                        </span>
                      ) : (
                        <span className="mr-2">
                          <MdKeyboardArrowUp
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300"
                          />{" "}
                        </span>
                      )}
                      <Image src={eng} alt="eng" className="mr-2" />
                      English
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>English</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {/* Dropdown ends */}

              <div className="px-12 mt-8">
                <Button className="" variant="custom" size="lg">
                  Login
                </Button>
              </div>

              <div className="px-12  mt-16">
                <ul className=" flex space-x-5">
                  <li>
                    <Link href="">
                      <FaTiktok className="w-5 h-5 text-white/50" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <RiInstagramFill className="w-5 h-5 text-white/50" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaSquareXTwitter className="w-5 h-5 text-white/50" />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaSnapchatGhost className="w-5 h-5 text-white/50" />
                    </Link>
                  </li>
                </ul>
              </div>
              {/* social icons ends */}
            </div>
          </nav>
        </>
      )}
      {click ? (
        <span
          onClick={() => {
            setClick(!click);
            setChangeBg(!click);
          }}
        >
          <Image
            src={closeIcon}
            alt="close"
            className="cursor-pointer md:hidden"
          />
        </span>
      ) : (
        <span
          onClick={() => {
            setClick(!click);
            setChangeBg(!click);
          }}
        >
          <Image
            src={hamburger}
            alt="open"
            className="cursor-pointer md:hidden"
          />
        </span>
      )}
    </>
  );
};

export default MobileNav;
