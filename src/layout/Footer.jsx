import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto px-4 lg:px-36 flex flex-col md:flex-row py-32 text-center md:text-left">
        <div className="basis-[50%] md:pr-32 flex items-center md:items-start flex-col">
          <img
            src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/07/organic-store-white-logo.png"
            className="mb-12 w-[150px]"
          />
          <p className="text-white">
            Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
            Ut quis eros blandit, ultrices diam in, elementum ex. Suspendisse
            quis faucibus urna. Suspendisse pellentesque.
          </p>
        </div>

        <div className="basis-[50%] flex  flex-col  md:flex-row text-center md:text-left">
          <div className="basis-[50%]">
            <div>
              <h1 className="text-2xl font-bold text-white mb-12">
                Quick Links
              </h1>
              <ul className="text-[#AEAEAE] flex flex-col gap-1 ">
                <Link className="hover:text-white">About</Link>
                <Link className="hover:text-white">Cart</Link>
                <Link className="hover:text-white">Checkout</Link>
                <Link className="hover:text-white">Home</Link>
                <Link className="hover:text-white">My Account</Link>
                <Link className="hover:text-white">Shop</Link>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mt-12">
                Site Links
              </h1>
              <ul className="text-[#AEAEAE] flex flex-col gap-1 ">
                <Link className="hover:text-white">Privacy Policy</Link>
                <Link className="hover:text-white">Shopping Details</Link>
                <Link className="hover:text-white">Offer Cupons</Link>
                <Link className="hover:text-white">Term & COndition</Link>
              </ul>
            </div>
          </div>

          <div className="basis-[50%] ">
            <div>
              <h1 className="text-2xl font-bold text-white mb-12">
                Download Our Mobile App
              </h1>
              <p className="text-[#AEAEAE]">
                orem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                aliquam gravida sollicitudin. Praesent porta enim mi, non
                tincidunt libero interdum sit amet.
              </p>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white mt-12 ">
                Quick Links
              </h1>
              <ul className="text-[#AEAEAE] flex flex-col gap-1 my-6">
                <Link className="hover:text-white">Privacy Policy</Link>
                <Link className="hover:text-white">Shopping Details</Link>
                <Link className="hover:text-white">Offer Cupons</Link>
                <Link className="hover:text-white">Term & Condition</Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-slate-800" />
      <div className="p-10 flex justify-around">
        <div>
          <p className="text-white">Copyright © 2024 | Organic Store</p>
        </div>
        <div>
          <ul className="flex gap-10">
            <Link className="text-white">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link className="text-white">
            <i className="fa-brands fa-square-facebook"></i>
            </Link>
            <Link className="text-white">
            <i className="fa-brands fa-instagram"></i>
            </Link>
          
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
