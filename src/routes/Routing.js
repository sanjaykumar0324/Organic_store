import WithAuth from "../HOC/WithAuth";
import About from "../pages/About";
import AllProducts from "../pages/AllProducts";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
export const Routing = [
  {
    id: 1,
    name: "Home",
    path: "/",
    element: Home,
  },
  {
    id: 2,
    name: "Shop",
    path: "/shop",
    element: AllProducts,
  },
  {
    id: 3,
    name: "Juice",
    path: "/product-category/:catgeory",
    element: AllProducts,
  },
  {
    id: 4,
    name: "About",
    path: "/about",
    element: About,
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
    element: Contact,
  },
  {
    id: 6,
    name: "Grocieries",
    path: "/product-category/:category",
    element: AllProducts,
  },
  {
    id: 8,
    name: "Product details",
    path: "/product/:productName",
    element: ProductDetails,
  },
  {
    id: 9,
    name: "Login",
    path: "/login",
    element: Login,
  },
  {
    id: 10,
    name: "private dashboard",
    path: "/user/dashboard",
    element: WithAuth(Dashboard),
  },
];
