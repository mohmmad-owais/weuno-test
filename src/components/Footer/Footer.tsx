import Image from "next/image";
import Link from "next/link";

import appleIco from "@/assets/imgs/appleIco.png";
import googleIco from "@/assets/imgs/googleIco.png";
import footerLogo from "@/assets/imgs/footer-logo.png";

import visaCard from "@/assets/imgs/visa-card.svg";
import masterCard from "@/assets/imgs/mastercard.png";
import americanExp from "@/assets/imgs/america-exp.png";

import { FaTiktok, FaSnapchatGhost } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="p-12 mt-20 border-t-2 border-white/50">
      {/* First Row */}
      <div className="flex md:flex-row flex-col justify-between">
        <h2 className="text-5xl md:text-6xl">
          Join us for an <br /> unforgettable experience
        </h2>
        <div className="flex-col md:mt-0 mt-10">
          <p className="tracking-wider uppercase">Download the groves App</p>
          <span className="flex mt-5 space-x-2">
            <Link href="">
              <Image src={appleIco} alt="" />
            </Link>
            <Link href="">
              <Image src={googleIco} alt="" />
            </Link>
          </span>
        </div>
      </div>
      {/* Second Row */}
      <div className="mt-20 flex flex-col space-y-10 md:space-y-0  md:flex-row justify-between">
        <div className="space-y-5">
          <label className="tracking-widest">LOCATION</label>
          <ul className="space-y-2">
            <li>Al-Hizam Park </li>
            <li>Al-Semairi, Yanbu Al Bahr 46455 </li>
            <li>Riyadh Saudi Arabia</li>
          </ul>
        </div>

        <div className="space-y-5">
          <label className="tracking-widest">WORKING HOURS</label>
          <ul className="space-y-2">
            <li>Sun until Thurs: 4:00PM</li>
            <li>Fri & Sat: 2:30PM </li>
          </ul>
          <ul className="mt-10">
            <li>Gate Close at:</li>
            <li>Sat until Wed: 12:00 AM </li>
            <li>Thu & Fri: 12:00AM</li>
          </ul>
        </div>

        <div className="space-y-5">
          <label className="tracking-widest">GUEST SERVICE CALL</label>
          <ul className="space-y-2">
            <li>cc@thegroves-sa.com</li>
            <li>920001672</li>
          </ul>
          <ul className="mt-10">
            <li>+923432423423</li>
          </ul>
        </div>
      </div>

      {/* Third Row */}

      <div className="mt-20 flex md:flex-row flex-col justify-between">
        <div>
          <Image src={footerLogo} alt="logo" />
        </div>

        <div className="flex items-center">
          <ul className="flex md:mt-0 mt-10 space-x-5">
            <li>
              <Link href="">
                <FaTiktok className="w-7 h-7 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <RiInstagramFill className="w-7 h-7 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FaSquareXTwitter className="w-7 h-7 text-gray-300" />
              </Link>
            </li>
            <li>
              <Link href="">
                <FaSnapchatGhost className="w-7 h-7 text-gray-300" />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Fourth Row */}

      <div className="mt-10 flex md:flex-row flex-col justify-between">
        <div>
          <ul className="flex space-x-10">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>©2024 The Groves for Entertainment</li>
          </ul>
        </div>
        <div>
          <ul className="flex space-x-2 items-center md:mt-0 mt-5">
            <li>
              <Image src={visaCard} alt="footerImages" />
            </li>
            <li>
              {" "}
              <Image src={masterCard} alt="footerImages" />
            </li>
            <li>
              {" "}
              <Image src={americanExp} alt="footerImages" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
