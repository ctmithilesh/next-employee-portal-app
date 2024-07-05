import React from "react";

const RegisterInputElement = ({ type, placeholder, name, register }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered"
      name={name}
      register={register}
    />
  );
};

export default RegisterInputElement;
