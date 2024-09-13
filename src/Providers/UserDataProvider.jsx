import React, { createContext, useState, useEffect } from "react";

export const UserDataContext = createContext();

const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState({ cart: [] });

  useEffect(() => {
    const savedUser = localStorage.getItem("token");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const addItemToCart = (itemId, countToAdd) => {
    const currentCart = user.cart || [];
    const updatedCart = currentCart.map((item) => {
      if (item.id === itemId) {
        return { ...item, count: item.count + countToAdd };
      }
      return item;
    });

    if (!updatedCart.some((item) => item.id === itemId)) {
      updatedCart.push({ id: itemId, count: countToAdd });
    }

    const updatedUser = { ...user, cart: updatedCart };
    setUser(updatedUser);
    localStorage.setItem("token", JSON.stringify(updatedUser));
  };

  const removeItemFromCart = (itemId) => {
    const updatedCart = user.cart.filter((item) => item.id !== itemId);

    const updatedUser = { ...user, cart: updatedCart };
    setUser(updatedUser);
    localStorage.setItem("token", JSON.stringify(updatedUser));
  };

  return (
    <UserDataContext.Provider
      value={{ user, setUser, addItemToCart, removeItemFromCart }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
