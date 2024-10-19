import React from "react";

const Products = [
  {
    id: 1,
    title: "Paneer Pizza",
    price: "22.99",
    imageUrl:
      "https://media.istockphoto.com/id/1341905666/photo/chinese-food-veg-pizza.jpg?s=612x612&w=0&k=20&c=ZMNxcRhL9uGV8zebXg5wGCh-5GzVBRHsu-lz7Sc06V4=",
    bgColor: "bg-amber-500",
  },
  {
    id: 2,
    title: "Loaded Cheese Fries",
    price: "17.49",
    imageUrl:
      "https://static.sooperchef.pk/topics/2020/01/waffle-pizza-fries-550x375.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 3,
    title: "Chicken Zinger Burger",
    price: "14.99",
    imageUrl:
      "https://img.freepik.com/premium-photo/zinger-burger-with-fries-chicken-burger_926154-893.jpg",
    bgColor: "bg-amber-500",
  },
  {
    id: 4,
    title: "Crispy Chicken Popcorn",
    price: "8.49",
    imageUrl:
      "https://t4.ftcdn.net/jpg/08/88/61/09/240_F_888610908_7g4F3jjikQO23zoC14flIF00X1yLBZOr.jpg",
    bgColor: "bg-amber-500",
  },
];

export default function ProductList() {
  return (
    <div className="flex flex-wrap items-center justify-center mb-6">
      {Products.map((product) => (
        <div
          key={product.id}
          className={`m-4 p-4 w-64 text-center rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 ${product.bgColor}`}
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-40 w-full object-cover rounded-t-lg"
          />
          <h3 className="text-lg font-bold text-white mt-2">{product.title}</h3>
          <p className="text-lg font-semibold text-white mt-2">
            ${product.price}
          </p>
          <button className="mt-4 px-6 py-2 bg-red-700 text-white rounded-full hover:bg-slate-700 transition duration-300">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
}
