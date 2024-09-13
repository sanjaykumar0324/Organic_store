import React, { useContext } from "react";
import SingleProduct from "../../components/SingleProduct";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Import the SingleProduct component

const TrendingProducts = () => {
  const navigate = useNavigate();
  const product = useSelector((state)=>state.products.products)

  const products = product || [];
  const handleProductClick = (product) => {
    navigate(
      `/product/${product.product_name.toLowerCase().replace(/ /g, "-")}`
    );
  };
  return (
    <div className="lg:p-28">
      <div>
        <h1 className="text-2xl lg:text-5xl text-center font-extrabold">
          Trending Products
        </h1>
      </div>
      <div className="container mx-auto px-4 lg:px-36 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mt-28">
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

export default TrendingProducts;
