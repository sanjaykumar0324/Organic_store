import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import { UserDataContext } from "../Providers/UserDataProvider";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { productName } = useParams();
  const products = useSelector((state)=>state.products.products)

  const [itemCount, setItemCount] = useState(1);
  const { user, addItemToCart } = useContext(UserDataContext);

  const product = products.find(
    (p) => p.product_name.toLowerCase().replace(/ /g, "-") === productName
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleOnChange = (e) => {
    const value = Math.max(1, Number(e.target.value)); // Ensure value is a number and at least 1
    setItemCount(value);
  };

  const handleAddToCart = () => {
    addItemToCart(product.id, itemCount);
    alert("cart item added");
  };

  return (
    <div className="bg-[#F8F6F3] min-h-screen flex justify-center">
      <div className="container mx-auto px-4 lg:px-28 grid  grid-cols-1 sm:grid-cols-2">
        <div className="text-white px-6 w-[100%] pt-10">
          <img src={product.image} className="w-full border border-slate-300" />
        </div>

        <div className="px-6 pt-4 lg:pt-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-black font-bold text-3xl">
              {product.product_name}
            </h1>
            <h2 className="text-xl font-bold">
              {product.price}{" "}
              <span className="font-normal text-lg text-slate-700">
                + Free Shipping
              </span>
            </h2>
            <p>
              Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur adipisci velit, sed quia non incidunt lores ta porro
              ame. numquam eius modi tempora incidunt lores ta porro ame.
            </p>
            <div className="flex items-center gap-4">
              <input
                type="number"
                value={itemCount}
                onChange={handleOnChange}
                className="w-12 h-12 text-center bg-white border border-slate-400"
              />
              <Button onClick={handleAddToCart}>Add to Cart</Button>
            </div>
            <hr className="border-slate-300 mt-5" />
            <p>
              <span className="text-[#8BC34A]">Category : </span>
              {product.category}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
