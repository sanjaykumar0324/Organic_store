import React from "react";

const Button = ({
  children = "",
  type = "button",
  className = "",
  icon = null,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-md bg-[#6A9739] hover:bg-[#8BC34A] text-sm text-white ${className}`}
      onClick={onClick}
    >
      {icon && <i className={`fa-solid fa-${icon} mr-2`} />}
      {children}
    </button>
  );
};

export default Button;
