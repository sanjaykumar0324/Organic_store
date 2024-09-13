import React, { forwardRef, useContext } from "react";
import Button from "./Button";
import { UserDataContext } from "../Providers/UserDataProvider";
// import { DataContext } from "../Providers/DataProvider";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const ShoppingCart = forwardRef(({ isOverlayOpen, handleCartClick }, ref) => {
  // const { data } = useContext(DataContext);
  const { user, removeItemFromCart } = useContext(UserDataContext);
  const product= useSelector((state)=>state.products.products)
  const products = product || [];
  console.log(products);

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleCartClick}
      ></div>
      <div
        ref={ref}
        className="fixed right-0 top-0  w-[100%] md:w-[400px] lg:w-[600px] h-[100vh] bg-white shadow-lg flex flex-col p-4 z-50 transition-transform duration-300 ease-in-out"
        style={{
          transform: isOverlayOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between">
            <h1 className="text-xl">Shopping Cart</h1>
            <button className="text-4xl p-0 m-0" onClick={handleCartClick}>
              &times;
            </button>
          </div>
          <hr className="border-slate-300 mt-4" />
          <div className="flex-1 overflow-y-auto">
            {user.cart && user.cart.length > 0 ? (
              user.cart.map((item) => {
                const product = getProductById(item.id);
                return product ? (
                  <CartItem
                    key={item.id}
                    product={product}
                    count={item.count}
                    onRemove={() => removeItemFromCart(item.id)}
                  />
                ) : (
                  <p key={item.id}>Product not found</p>
                );
              })
            ) : (
              <p>Your cart is empty.</p>
            )}
          </div>
          <div className="absolute bottom-4 w-full px-8">
            <Button className="w-full">Continue Shopping</Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default ShoppingCart;
