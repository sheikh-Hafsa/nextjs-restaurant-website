import React from "react";
export default function banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from black to grey-700 font-sans px-6 py-12 mb-7 text-white">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://icebergdriveinn.com/cdn/shop/articles/Fast-Food-How-It-Has-Evolved-in-the-Past-Decades.jpg?v=1625683335"
          alt="delicious food banner"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-white sm:text-3xl font-bold mb-4">
          TURN YOUR HUNGER INTO HAPINESS
        </h2>
        <p className="italic text-white text-lg text-center mb-6 max-w-xl">
          Order fresh and delicious food anytime
        </p>
        <button
          type="button"
          className="bg-red-800 text-white text-sm font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-500 transition duration-300"
        >
          Save Upto 30%
        </button>
      </div>
    </div>
  );
}
