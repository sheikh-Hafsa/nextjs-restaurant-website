"use client";
import React from "react";

type offer = {
  title: string;
  description: string;
};
const SpecialOffers: React.FC = () => {
  const offers: offer[] = [
    {
      title: "Super Exiciting Offer",
      description: "Place Your First Order And Get 20% OFF On Overall Menu",
    },
    {
      title: "MidNight Deal",
      description: "11pm to 3Am Buy Any Medium PizZa And Get 50ml Drink Free",
    },
    {
      title: "Frnds & Family Deal",
      description:
        "Order Our Frnds & Family Deal and Get 12Pcs Chicken Nuggets free",
    },
    {
      title: "Buy 1 Get 1 Free",
      description:
        "Buy a medium/large pizZa and get Another pizZa Absolutely Free ",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };
  return (
    <section className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="italic text-4xl font-bold mb-6 text-white">
          Exciting Deals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-1 gap-6">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-red-800 shadow-lg rounded-lg text-center hover:bg-slate-500 transition duration-300 transform hover:scale-105"
            >
              <h3 className="text-2xl  font-bold text-amber-400">
                {offer.title}
              </h3>
              <p className="text-white mt-3 font-semibold">
                {offer.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
