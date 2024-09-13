import React, { useContext } from "react";
import { DataContext } from "../../Providers/DataProvider";

const ServiceCard = () => {
  const data = use
  const services = data?.service_data || [];

  return (
    <div className="bg-black p-4">
      <div className="grid grid-flow-col gap-8 container mx-auto justify-center m-6 ">
        {services.map((item) =>
          item.item_name ? (
            <div
              key={item.id}
              className="flex gap-4 items-center bg-[#303030] px-10 py-8 rounded-md text-white "
            >
              <div className="text-[#8BC34A]">
                {<i className={item.icon}></i>}
              </div>
              <div>
                <p className="text-2xl">{item.item_name}</p>
                <p>{item.item_desc}</p>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
