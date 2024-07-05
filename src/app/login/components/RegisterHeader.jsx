import React from "react";

const RegisterHeader = ({ title, description }) => {
  return (
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
    </div>
  );
};

export default RegisterHeader;
