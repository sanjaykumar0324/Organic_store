import React from "react";
import SingleProduct from "../../components/SingleProduct";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BestSellingProduct = () => {
  const product = useSelector((state)=>state.products.products)

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(
      `/product/${product.product_name.toLowerCase().replace(/ /g, "-")}`
    );
  };

  const products = product || [];

  return (
    <div className="lg:p-28">
      <div>
        <h1 className=" text-2xl md:text-5xl text-center font-extrabold">
          Best Selling Products
        </h1>
      </div>
      <div className="container px-4  items-center md:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-28">
        {products.length > 0 ? (
          products.map((product) => (
            <SingleProduct
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
              className={"w-80"}
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default BestSellingProduct;
