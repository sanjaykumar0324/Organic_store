import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserDataContext } from "../Providers/UserDataProvider";
import ShoppingCart from "../components/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
// import { fetchDataRequest } from "../Redux/actions/ProductActionBySaga";
// import { fetchNavRequest } from "../Redux/actions/NavBarActionBySaga";
import { getAllProductsData } from "../Redux/actions/ProductsAction";
import { getNavbarData } from "../Redux/actions/NavbarAction";

const Header = () => {
  const [cartItems, setCartItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(UserDataContext);
  const navbar = useSelector((state) => state.navbar.navbar) || [];
  const productsFromStore =
    useSelector((state) => state.products.products) || [];
  const [menuHidden, setMenuHidden] = useState("hidden");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsData());
    dispatch(getNavbarData());
  }, []);

  useEffect(() => {
    const cart = user.cart || [];
    let totalItems = 0;
    let total = 0;

    cart.forEach((cartItem) => {
      const product = productsFromStore.find((p) => p.id === cartItem.id);
      if (product) {
        const count = Number(cartItem.count);
        const price = Number(product.price);
        if (!isNaN(count) && !isNaN(price)) {
          totalItems += count;
          total += price * count;
        }
      }
    });

    setCartItems(totalItems);
    setTotalPrice(total);
  }, [productsFromStore, user.cart]);

  const leftLinks = Array.isArray(navbar)
    ? navbar.flatMap((item) => item.left_links || [])
    : [];
  const rightLinks = Array.isArray(navbar)
    ? navbar.flatMap((item) => item.right_links || [])
    : [];

  const activeClassName = "text-[#8BC34A] no-underline hover";
  const inactiveClassName = "text-black no-underline";
  const hoverClassName = "hover:text-[#8BC34A]";

  const drawerRef = useRef(null);

  const handleCartClick = () => {
    setIsOverlayOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOverlayOpen]);

  const handleProfileClick = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/user/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-white relative">
      <ul className="flex items-center gap-6">
        <Link to={"/"}>
          <img
            src={
              "https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
            }
            className="w-[150px]"
            alt="logo"
          />
        </Link>
        <div className=" items-center gap-6 hidden lg:flex">
          {leftLinks.map((link) => (
            <NavLink
              key={link.id}
              to={`${link.path}/${link.path_name}`}
              className={({ isActive }) =>
                `${
                  isActive ? activeClassName : inactiveClassName
                } ${hoverClassName}`
              }
            >
              {link.item}
            </NavLink>
          ))}
        </div>
      </ul>
      <ul className="flex gap-6 items-center">
        <div className="gap-6 items-center hidden lg:flex">
          {rightLinks.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                `${
                  isActive ? activeClassName : inactiveClassName
                } ${hoverClassName}`
              }
            >
              {link.item}
            </NavLink>
          ))}
        </div>
        <div
          className="flex gap-3 items-center text-[#8BC34A] cursor-pointer"
          onClick={handleCartClick}
        >
          <p className="text-lg font-bold">${totalPrice.toFixed(2)}</p>
          <div className="relative">
            <span className="absolute top-[-8px] right-[-10px] px-[6px] rounded-full bg-[#8BC34A] text-white text-sm">
              {cartItems}
            </span>
            <i className="fa-solid fa-basket-shopping fa-lg"></i>
          </div>
        </div>
        <i
          className="fa-solid fa-user-large cursor-pointer"
          onClick={handleProfileClick}
        ></i>
        <span
          className="lg:hidden "
          onClick={() => {
            if (menuHidden === "hidden") {
              setMenuHidden("block");
            } else {
              setMenuHidden("hidden");
            }
          }}
        >
          Menu
        </span>
        <div className={`${menuHidden} absolute right-0 top-24  bg-white`}>
          <ul>
            <li>Everything</li>
            <li>Groceries</li>
            <li>juice</li>
            <li>About</li>
            <li>Contact </li>
          </ul>
        </div>
      </ul>
      {isOverlayOpen && (
        <ShoppingCart
          isOverlayOpen={isOverlayOpen}
          handleCartClick={handleCartClick}
          ref={drawerRef}
        />
      )}
    </div>
  );
};

export default Header;
