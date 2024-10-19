import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-grey-700">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/* logo */}
                <GiForkKnifeSpoon className="w-9 h-9 text-yellow-400 hover:text-red-800" />
                {/* search icon */}
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search Your Favourite Meal From Menu"
                  />
                  <FaSearch className="w-5 h-5 text-red-800 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>
              <div className="flex justify-center items-center gap-2">
                <FaBolt className="flex justify-items-center w-5 h-5 text-yellow-400 hidden lg:block md:block " />
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it with
                  <span className="italic text-red-400"> 15 minutes! </span>
                </p>
                {/* cart icon */}
                <FaCartShopping className="p-1 h-8 w-8 rounded-full ring-2 relative ring-yellow-400 hover:ring-blue-500 text-white" />
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 relative ring-yellow-400 hover:ring-blue-500"
                  src="https://media.licdn.com/dms/image/v2/D4E03AQGorReD91RxbQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721612902224?e=2147483647&v=beta&t=uKJp3DAa3rdHoA5GNRFjVdJ3Wzm8_iB31QK6l3Bx56w"
                  alt="user avtor"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
