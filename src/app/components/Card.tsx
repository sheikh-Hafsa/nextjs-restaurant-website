import React from "react";

const FloatingImageContentBlock = () => {
  return (
    <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-10">
        <h2 className="text-4xl font-extrabold mb-4 text-red-700">
          Enjoy Our Delicious Meal
        </h2>
        <p className="italic text-white mb-4 font-bold">
          Fresh, Delicious Meal to Reach Your Optimum Health And Fitness
        </p>
        <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-900 transition duration-200">
          Order Now
        </button>
        <h3 className="text-3xl font-extrabold mt-6 mb-2 text-center text-amber-400">
          WE'RE EXCITED TO ANNOUNCE OUR NEW MENU LAUNCH!
        </h3>
        <ul>
          <li className="italic text-white">
            <strong>Penne Pasta:</strong> <br />
            Penne Pasta with Cream Sauce and Cheese
          </li>
          <br />
          <li className="italic text-white">
            <strong>Spaghetti Bolognese:</strong> <br />
            Classic pasta with minced meat sauce mixed with tomato paste
          </li>
          <br />
          <li className="italic text-white">
            <strong>Spaghetti with Mushrooms:</strong> <br />
            Minced meat sauce mixed with fresh mushrooms
          </li>
          <br />
          <li className="italic text-white">
            <strong>Macaroni & Cheese:</strong> <br />
            Macaroni with cheese and beef toppings
          </li>
          <br />
          <li className="italic text-white">
            <strong>Spaghetti & Cheese:</strong> <br />
            Spaghetti with cheese and fresh tomato sauce
          </li>
          <br />
        </ul>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <img
          src="https://png.pngtree.com/png-clipart/20240925/original/pngtree-cute-chef-girl-illustration-vector-logo-png-image_16087503.png"
          alt="chef picture"
          className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default FloatingImageContentBlock;
