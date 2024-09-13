import React from "react";
import Overview from "./Overview";
import ServiceCard from "./ServiceCard";
import BestSellingProduct from "./BestSellingProduct";
import FreshCard from "./FreshCard";
import TrendingProducts from "./TrendingProducts";

const Home = () => {
  return (
    <>
      <Overview />

      {/* <ServiceCard /> */}
      <BestSellingProduct />

      <div className="py-28 bg-[#F8F6F3] relative">
        <img
          src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/basil-leaf.png"
          className="absolute top-[-30px] right-[46%] w-[160px]"
          alt="leaves"
        />
        <div className="container mx-auto px-4 lg:px-36">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FreshCard />
            <FreshCard />
            <FreshCard />
          </div>
        </div>
      </div>
      <TrendingProducts />
    </>
  );
};

export default Home;
