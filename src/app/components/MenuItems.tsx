import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const ProductsCardGrid = () => {
  const ProductImages = [
    "https://thumbs.dreamstime.com/b/symphony-spices-tandoori-chicken-pizza-explores-flavors-india-ai-generated-sizzling-base-marinated-topped-medley-329400480.jpg",
    "https://w0.peakpx.com/wallpaper/190/1022/HD-wallpaper-italian-pizza-tasty-graphy-pizza-food.jpg",
    "https://images7.alphacoders.com/596/thumb-1920-596343.jpg",
    "https://thebranddeco.com/cdn/shop/articles/4-Cheese_Pizza_2.jpg?v=1586458446",
    "https://img.freepik.com/premium-photo/pizza-with-mushrooms-cheese-black-background-italian-food_1114005-141.jpg",
    "https://www.moulinex-me.com/medias/?context=bWFzdGVyfHJvb3R8MTQzNTExfGltYWdlL2pwZWd8YUdObEwyaG1aQzh4TlRrMk9EWXlOVGM0TmpreE1DNXFjR2N8MmYwYzQ4YTg0MTgzNmVjYTZkMWZkZWZmMDdlMWFlMjRhOGIxMTQ2MTZkNDk4ZDU3ZjlkNDk2MzMzNDA5OWY3OA",
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/shutterstock/videos/3408804009/thumb/1.jpg?ip=x480')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          opacity: 0.1,
        }}
      />
      <h1 className="font-bold text-4xl mb-6 text-white z-10 relative">
        HOT AND SPICY PIzZzA MEALS
      </h1>
      <h1 className="italic text-3xl text-white z-10 relative font-bold">
        At Your DoorStep!
      </h1>
      <section
        id="projects"
        className="mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {Array.from({ length: 6 }).map((_, Index) => (
          <div
            key={Index}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative"
          >
            <a href="#">
              <img
                src={ProductImages[Index]}
                alt={`product${Index + 1}`}
                className="h-80 w-72 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-red-800 mr-3 uppercase text-xs">
                  {" "}
                  Category
                </span>
                <p className="text-lg font-bold trancate block capitalize">
                  PIzZA {Index + 1}{" "}
                </p>

                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black my-3 cursor-auto">
                    $22.99
                  </p>
                  <del>
                    <br />
                    <p className="text-lg  text-red-700 my-3 cursor-auto">
                      $25.99
                    </p>
                  </del>
                  <div className="ml-auto">
                    <TiShoppingCart className="w-8 h-8 text-red-700" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductsCardGrid;
