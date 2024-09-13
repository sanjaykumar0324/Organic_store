import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    logo: "",
    navbar: [],
    service_data: [],
    products: [],
  });

  const fetchData = async () => {
    try {
      const logoResponse = await axios.get("http://localhost:5000/logo");
      const navResponse = await axios.get("http://localhost:5000/navbar");
      const serviceCardResponse = await axios.get(
        "http://localhost:5000/service_data"
      );
      const productsResponse = await axios.get(
        "http://localhost:5000/products"
      );

      setData({
        logo: logoResponse.data,
        navbar: navResponse.data,
        service_data: serviceCardResponse.data,
        products: productsResponse.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
