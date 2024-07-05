import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const Logout = () => {
  cookies().delete("id");
  cookies().delete("name");
  cookies().delete("token");

  redirect("/login");

  return (
    <div>
      <h3>Logging Out... </h3>
    </div>
  );
};

export default Logout;
