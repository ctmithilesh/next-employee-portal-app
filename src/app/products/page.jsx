import Navigation from "@/lib/components/navigation";
import React from "react";
import { fetchProducts } from "./lib/action";
import ProductList from "./components/ProductList";

const Page = async () => {
  const result = await fetchProducts();

  return (
    <>
      <Navigation />
      <ProductList result={result} />
    </>
  );
};

export default Page;
