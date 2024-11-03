"use client";

import Image from "next/image";

import { FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

import {
  UserCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/16/solid";

import logo from "@/assets/imgs/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=" flex  items-center justify-between py-8 px-12 bg-black shadow-black shadow-2xl ">
        {/* logo */}
        <span className="w-1/2">
          <Image src={logo} width={220} height={140} alt="logo" />
        </span>
        {/* right items */}
        <div className="flex items-center">
          <ul className="flex space-x-5">
            <li>
              <Link href="">
                <FaTiktok className="w-5 h-5 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <RiInstagramFill className="w-5 h-5 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FaSquareXTwitter className="w-5 h-5 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FaSnapchatGhost className="w-5 h-5 text-gray-300" />
              </Link>
            </li>
          </ul>
          <span className="ml-10">
            <Button className="" variant="custom" size="lg">
              Login
            </Button>
          </span>

          <div className="ml-10">
            <DropdownMenu>
              <DropdownMenuTrigger>English</DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Language</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div className="hidden sm:block px-12 py-3 bg-black/60 shadow-black shadow-2xl border-b-2 border-t-2 border-white/50">
        <ul className="flex justify-between uppercase tracking-wider">
          <li>
            <Link href="">Dine with us</Link>
          </li>
          <li>
            <Link href="">Plan your visit</Link>
          </li>
          <li>
            <Link href="">Events</Link>
          </li>
          <li>
            <Link href="">View Groves map</Link>
          </li>
          <li>
            <Link href="">Our story</Link>
          </li>
          <li>
            <Link href="">Contact US</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
