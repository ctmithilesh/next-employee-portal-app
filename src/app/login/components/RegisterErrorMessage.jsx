import React from "react";

const RegisterErrorMessage = ({ error, name }) => {
  return (
    <strong class="text-red-400">{error && ` ${name} is Required `}</strong>
  );
};

export default RegisterErrorMessage;
