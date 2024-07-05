"use client";
import React, { useEffect } from "react";
import Navigation from "@/lib/components/navigation";
import AddEmployeeDetails from "./components/AddEmployeeDetails";

const Page = () => {
  useEffect(() => {
    console.log("hi from client");
  });

  return (
    <>
      <Navigation />
      <AddEmployeeDetails />
    </>
  );
};

export default Page;
