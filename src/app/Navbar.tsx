import React from "react";
import Image from "next/image";
import UserButton from "@/components/localComponent/userbtn";
import Burger from "./burger";

const Navbar = () => {
  return (
    <div >
  
      <nav className="bg-black">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10 ">
          <div className="flex items-center justify-between h-20">
            <div className="flex item-center">
              <div className="flex flex-row">
              <Burger/>
                <Image
                className="ml-[20px]"
                  src="/eLogo.png"
                  alt="event logo"
                  width={200}
                  height={200}
                  
                />
              </div>
            </div>
            <div className="hidden md:block  ">
              <div className="ml-flex items-center spce-x-4">
                <a
                  href="/"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Home
                </a>

                <a
                  href="/events"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Events
                </a>

                <a
                  href="/services"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Services
                </a>

                <a
                  href="/schedule"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Schedule
                </a>

                <a
                  href="/about"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  About
                </a>

                <a
                  href="/contact"
                  className="text-white 
                  text-xl
                  hover:bg-white 
                  hover:text-black 
                  rounded-lg p-3 ml-5"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative flex items-center mr-8 ">
              <UserButton/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
