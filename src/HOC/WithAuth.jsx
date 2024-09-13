import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserDataContext } from "../Providers/UserDataProvider";

const WithAuth = (Component) => {
  return (props) => {
    const { user, setUser } = useContext(UserDataContext);
    console.log("from auth");

    return user && localStorage.getItem("token") ? (
      <Component {...props} />
    ) : (
      <Navigate to="/login" />
    );
  };
};

export default WithAuth;
