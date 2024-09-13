import React, { useContext, useEffect } from "react";
import { UserDataContext } from "../Providers/UserDataProvider";


const Dashboard = () => {
  const { user } = useContext(UserDataContext);

  return (
    <div className="h-[70vh] flex justify-center items-center">
      <div>
        <h1 className="text-3xl mb-9">Dashboard</h1>
        <h1 className="text-2xl"> Name : {user.name}</h1>
        <p>Email : {user.email}</p>
     
      </div>
    </div>
  );
};

export default Dashboard;
