import Footer from "@/lib/components/footer";
import Navigation from "@/lib/components/navigation";
import React from "react";
import DashboardWelcome from "./components/DashboardWelcome";
import { fetchEmailCookie } from "./lib/actions";
import { cookies } from "next/headers";

const EmployeeDashboard = async () => {
  const email = await cookies().get("email")?.value;
  console.log(email);

  return (
    <>
      <Navigation />
      <DashboardWelcome email={email} />
      <Footer />
    </>
  );
};

export default EmployeeDashboard;
