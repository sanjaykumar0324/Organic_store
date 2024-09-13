import React from "react";

const SingleProduct = ({ product, onClick, className }) => {
  return (
    <div className="p-4 flex flex-col items-center  text-center cursor-pointer " onClick={onClick}>
      <img
        src={product.image}
        alt={product.product_name}
        className={`object-cover ${className}`}
      />
      <p className="text-gray-400 text-sm mt-4">{product.category}</p>
      <p className="text-black font-bold text-xl">{product.product_name}</p>
      <p className="text-black text-sm font-bold">${product.price}</p>
    </div>
  );
};

export default SingleProduct;
