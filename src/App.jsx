import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Routing } from "./routes/Routing";
import UserDataProvider from "./Providers/UserDataProvider";

import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllProductsData());
  //   dispatch(getNavbarData())
  // }, [dispatch]);

  return (
      <UserDataProvider>
        <Layout>
          <Routes>
            {Routing.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  Component={route.element}
                />
              );
            })}
          </Routes>
        </Layout>
      </UserDataProvider>
  );
};

export default App;
