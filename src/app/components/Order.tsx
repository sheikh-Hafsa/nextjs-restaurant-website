import React from "react";

const Order = [
  {
    id: 5,
    title: "Club Sandwhich",
    price: "10.99",
    imageUrl:
      "https://static.tossdown.com/images/a542e6ef-51e1-4c03-930c-6a83f30e3980.webp",
    bgColor: "bg-amber-500",
  },
  {
    id: 6,
    title: "Crispy zinger wrap",
    price: "12.49",
    imageUrl:
      "https://static.tossdown.com/images/027b4088-f845-4657-8ca6-ce27954783f7.webp",
    bgColor: "bg-amber-500",
  },
  {
    id: 7,
    title: "Chicken nuggets",
    price: "8.99",
    imageUrl:
      "https://ezfry.pk/wp-content/uploads/2024/06/chicken-nuggets-.webp",
    bgColor: "bg-amber-500",
  },
  {
    id: 8,
    title: "TacOs",
    price: "8.49",
    imageUrl:
      "https://img.freepik.com/premium-photo/tacos-with-meat-vegetables_1339-75179.jpg",
    bgColor: "bg-amber-500",
  },
];

export default function OrderList() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-6">
      {Order.map((Order) => (
        <div
          key={Order.id}
          className={`m-4 p-4 w-64 text-center rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${Order.bgColor}`}
        >
          <img
            src={Order.imageUrl}
            alt={Order.title}
            className="h-40 w-full object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-bold text-white mt-2">{Order.title}</h3>
          <p className="text-lg font-semibold text-white mt-2">
            ${Order.price}
          </p>
          <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-full hover:bg-slate-700 transition duration-300">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
}
