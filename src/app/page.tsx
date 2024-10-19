import React from "react";
import Navbar from "../app/components/Navbar";
import Carousel from "../app/components/Carousel";
import Progressor from "../app/components/Progressor";
import Order from "../app/components/Order";
import Banner from "../app/components/Banner";
import ProductList from "../app/components/ProductList";
import MenuItems from "../app/components/MenuItems";
import Offer from "../app/components/Offer";
import Card from "../app/components/Card";
import Reservation from "../app/components/Reservation";
import Footer from "../app/components/Footer";

export default function page() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-800 min-h-screen">
      <Navbar />
      <Carousel />
      <Progressor />
      <Order />
      <Banner />
      <ProductList />
      <MenuItems />
      <Offer />
      <Card />
      <Reservation />
      <Footer />
    </div>
  );
}
