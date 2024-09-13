import React from "react";

const CartItem = ({ product, count, onRemove }) => {
  return (
    <div className="flex justify-between items-center border border-slate-300 p-4 w-full">
      <img
        src={product.image}
        alt={product.product_name}
        className="w-16 h-16 object-cover"
      />
      <p>{product.product_name}</p>
      <p>Quantity: {count}</p>
      <button className="text-red-500 text-2xl" onClick={onRemove}>
        &times;
      </button>
    </div>
  );
};

export default CartItem;
