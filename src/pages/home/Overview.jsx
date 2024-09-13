import React from "react";
import Button from "../../components/Button";

const Overview = () => {
  return (
    <div className="h-[80vh] bg-[#FBFAF8]">
      <div className="flex flex-col sm:flex-row  container px-4 lg:px-32  mx-auto items-center h-full">
      <div className="basis-[50%] px-12 flex flex-col gap-4 sm:order-2">
          <h3 className=" text-sm md:text-xl">Best Quality Products</h3>
          <h1 className="text-2xl md:text-5xl">Join The Organic Movement!</h1>
          <p className="text-sm md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div>
            <Button icon={"cart-shopping"}>Shop Now</Button>
          </div>
        </div>
        <div className="basis-[50%] flex items-center sm:order-1">
          <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2021/03/organic-products-hero.png" />
        </div>
       
      </div>
    </div>
  );
};

export default Overview;
