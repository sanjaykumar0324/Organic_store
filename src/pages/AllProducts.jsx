import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

// Spinner color can be managed with state if needed
const spinnerColor = "black"; // Default spinner color

const AllProducts = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const location = useLocation();
  const pathname = location.pathname;
  const segments = pathname.split("/").filter((segment) => segment);
  const lastSegment = segments[segments.length - 1];

  useEffect(() => {
    const allProducts =
      lastSegment === "shop"
        ? products
        : products.filter((product) => product.category === lastSegment);

    // Apply search filter
    const searchedProducts = allProducts.filter((product) =>
      product.product_name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredProducts(searchedProducts);
  }, [products, search, lastSegment]);

  const getSideProduct = (products) => {
    return products.slice(0, 3);
  };

  const sideProduct = getSideProduct(products);

  const handleProductClick = (product) => {
    navigate(
      `/product/${product.product_name.toLowerCase().replace(/ /g, "-")}`
    );
  };

  return (
    <div className="bg-[#F8F6F3] min-h-screen">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader
            color={spinnerColor}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container mx-auto grid lg:grid-cols-[25%_75%] px-4 xl:px-24">
          <div className="border-r-2 border-gray-300 px-12 my-12">
            <div className="grid grid-cols-[1fr_auto] gap-2 mb-6 items-center">
              <input
                type="text"
                placeholder="Search product"
                className="p-2 w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="mt-6">
              <h1 className="text-2xl font-bold">Filter By Price</h1>
              {/* <ul>
                {Object.entries(productCounts).map(([category, count]) => (
                  <li key={category}>
                    <span className="text-[#8BC34A]">{category}</span> ({count})
                  </li>
                ))}
              </ul> */}
            </div>
            <div className="mt-6 hidden lg:block">
              {sideProduct.map((product) => (
                <SingleProduct
                  key={product.id}
                  product={product}
                  onClick={() => handleProductClick(product)}
                  className={"w-full"}
                />
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="container px-12 my-12">
            <p className="text-slate-600">
              <Link to={"/"}>Home</Link> / {lastSegment.charAt(0).toUpperCase()}
              {lastSegment.substring(1)}
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <SingleProduct
                    key={product.id}
                    product={product}
                    onClick={() => handleProductClick(product)}
                  />
                ))
              ) : (
                <div>No products found</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllProducts;
