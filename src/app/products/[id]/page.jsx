"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { fetchDetails } from "../lib/action";
import Navigation from "@/lib/components/navigation";
import ViewProductDetails from "../components/ViewProductDetails";

const Page = () => {
  const [data, setData] = useState(null);

  const dataCondition = data != null && data.length > 0;
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchProductDetails();
  }, [dataCondition]);

  const fetchProductDetails = async () => {
    const result = await fetchDetails(id);

    setData(result);
  };

  return (
    <>
      <Navigation />
      <ViewProductDetails data={data} />
    </>
  );
};

export default Page;
